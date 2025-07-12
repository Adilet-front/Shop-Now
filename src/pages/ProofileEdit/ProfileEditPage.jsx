import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProfileForm from "./components/ProfileForm";
import "./ProfileEditPage.scss";
import { useNavigate } from "react-router-dom";

import {
  auth,
  db,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onAuthStateChanged,
} from "../../../firebase";


const ProfileEditPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState("success");

  const displayMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);

        const currentDisplayName = user.displayName || "";
        const nameParts = currentDisplayName.split(" ");
        const currentFirstName = nameParts[0] || "";
        const currentLastName = nameParts.slice(1).join(" ") || "";
        const currentEmail = user.email || "";

        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        let currentAddress = "";
        if (userDocSnap.exists()) {
          currentAddress = userDocSnap.data().address || "";
        } else {
          await setDoc(
            userDocRef,
            { address: "", createdAt: new Date() },
            { merge: true }
          );
        }

        setProfileData({
          firstName: currentFirstName,
          lastName: currentLastName,
          email: currentEmail,
          address: currentAddress,
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      } else {
        displayMessage(t("profileEdit.alerts.notAuthenticated"), "error");
      }
    });

    return () => unsubscribe();
  }, [t]);

  const handleSave = async (formData) => {
    if (!currentUser) {
      displayMessage(t("profileEdit.alerts.notAuthenticated"), "error");
      return;
    }

    setIsSaving(true);
    try {
      const newDisplayName =
        `${formData.firstName} ${formData.lastName}`.trim();
      if (currentUser.displayName !== newDisplayName) {
        await updateProfile(currentUser, { displayName: newDisplayName });
      }

      if (currentUser.email !== formData.email) {
        if (formData.currentPassword) {
          const credential = EmailAuthProvider.credential(
            currentUser.email,
            formData.currentPassword
          );
          await reauthenticateWithCredential(currentUser, credential);
          await updateEmail(currentUser, formData.email);
        } else {
          displayMessage(t("profileEdit.alerts.reauthRequiredEmail"), "error");
          setIsSaving(false);
          return;
        }
      }

      if (
        formData.newPassword &&
        formData.newPassword === formData.confirmNewPassword
      ) {
        if (formData.currentPassword) {
          const credential = EmailAuthProvider.credential(
            currentUser.email,
            formData.currentPassword
          );
          await reauthenticateWithCredential(currentUser, credential);
          await updatePassword(currentUser, formData.newPassword);
        } else {
          displayMessage(
            t("profileEdit.alerts.reauthRequiredPassword"),
            "error"
          );
          setIsSaving(false);
          return;
        }
      } else if (
        formData.newPassword &&
        formData.newPassword !== formData.confirmNewPassword
      ) {
        displayMessage(t("profileEdit.validation.passwordsMismatch"), "error");
        setIsSaving(false);
        return;
      }

      const userDocRef = doc(db, "users", currentUser.uid);
      if (profileData.address !== formData.address) {
        await updateDoc(userDocRef, { address: formData.address });
      }

      displayMessage(t("profileEdit.alerts.savedSuccess"), "success");

      setProfileData((prev) => ({
        ...prev,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    } catch (error) {
      console.error("Error saving profile:", error);
      let errorMessage = t("profileEdit.alerts.saveErrorGeneric");
      if (error.code === "auth/requires-recent-login") {
        errorMessage = t("profileEdit.alerts.reauthRequired");
      } else if (error.code === "auth/wrong-password") {
        errorMessage = t("profileEdit.alerts.wrongPassword");
      } else if (error.code === "auth/email-already-in-use") {
        errorMessage = t("profileEdit.alerts.emailUsed");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("profileEdit.alerts.invalidEmail");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("profileEdit.alerts.weakPassword");
      }
      displayMessage(errorMessage, "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    displayMessage(t("profileEdit.alerts.cancelled"), "info");
    setProfileData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    }));
  };

  return (
    <div className="profile-edit-page">
      <section className="page-header">
        <nav className="breadcrumbs">
          <span onClick={() => navigate("/home")}>{t("Home")}</span> /{" "}
          <span>{t("myAccount")}</span>
        </nav>
        <div className="welcome-message">
          {t("welcome")} {currentUser?.displayName || "User"}
        </div>
      </section>

      <div className="main-content">
        <aside className="sidebar">
          <h3>{t("profileEdit.manageMyAccount")}</h3>
          <ul>
            <li className="active">{t("profileEdit.myProfile")}</li>
            <li>{t("profileEdit.addressBook")}</li>
            <li>{t("profileEdit.myPaymentOptions")}</li>
          </ul>
          <h3>{t("profileEdit.myOrders")}</h3>
          <ul>
            <li>{t("profileEdit.myReturns")}</li>
            <li>{t("profileEdit.myCancellations")}</li>
          </ul>
          <h3>{t("profileEdit.myWishList")}</h3>
        </aside>

        <main className="profile-form-container">
          <h2>{t("profileEdit.editYourProfile")}</h2>
          <ProfileForm
            initialData={profileData}
            onSave={handleSave}
            onCancel={handleCancel}
            isLoading={isSaving}
          />
        </main>
      </div>

      {showMessage && (
        <div className={`message-box ${messageType}`}>{message}</div>
      )}
    </div>
  );
};

export default ProfileEditPage;
