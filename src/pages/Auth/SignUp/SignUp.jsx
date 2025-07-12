import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../modules/Form/Form";
import { InputField } from "../../../modules/Form/components/InputField/InputField";
import { AuthButton } from "../../../modules/Form/components/AuthButton/AuthButton";
import { GoogleAuthButton } from "../../../modules/Form/components/GoogleAuthButton/GoogleAuthButton";
import styles from "./Signup.module.scss";

import {
  auth,
  googleProvider,
  db,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  doc,
  setDoc,
  collection,
  addDoc,
} from "../../../../firebase";

export const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    address: "",
  });

  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [isLoadingGoogleAuth, setIsLoadingGoogleAuth] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingForm(true);
    const { name, emailOrPhone, password, address } = formData;

    if (!name || !emailOrPhone || !password || !address) {
      alert(t("sign-up.fillAllFields"));
      setIsLoadingForm(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailOrPhone)) {
      alert(t("sign-up.invalidEmail"));
      setIsLoadingForm(false);
      return;
    }

    if (password.length < 6) {
      alert(t("sign-up.passwordLength"));
      setIsLoadingForm(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailOrPhone,
        password
      );
      const user = userCredential.user;

      const [firstName, ...rest] = name.trim().split(" ");
      const lastName = rest.join(" ");

   
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

     
      await setDoc(doc(db, "users", user.uid), {
        address,
        createdAt: new Date(),
      });

    
      await addDoc(collection(db, "mail"), {
        to: user.email,
        message: {
          subject: t("sign-up.welcomeSubject"),
          html: `<h3>${t("sign-up.greeting")}, ${
            name || user.email
          }!</h3><p>${t("sign-up.created")}</p>`,
        },
      });

      alert(
        `${t("sign-up.successTitle")}, ${name || user.email}! ${t(
          "sign-up.successMessage"
        )}`
      );
      setFormData({ name: "", emailOrPhone: "", password: "", address: "" });
      navigate("/home");
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      let message = t("sign-up.errorGeneric");
      if (error.code === "auth/email-already-in-use")
        message = t("sign-up.errorEmailUsed");
      else if (error.code === "auth/invalid-email")
        message = t("sign-up.errorInvalidEmail");
      else if (error.code === "auth/weak-password")
        message = t("sign-up.errorWeakPassword");
      alert(message);
    } finally {
      setIsLoadingForm(false);
    }
  };

  const handleGoogleSignInRegister = async () => {
    setIsLoadingGoogleAuth(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

     
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          address: "",
          createdAt: new Date(),
        },
        { merge: true }
      );

      await addDoc(collection(db, "mail"), {
        to: user.email,
        message: {
          subject: t("sign-up.welcomeSubject"),
          html: `<h3>${t("sign-up.greeting")}, ${
            user.displayName || user.email
          }!</h3><p>${t("sign-up.created")}</p>`,
        },
      });

      alert(`${t("sign-up.welcomeTitle")}, ${user.displayName || user.email}!`);
      setFormData({ name: "", emailOrPhone: "", password: "", address: "" });
      navigate("/home");
    } catch (error) {
      console.error("Ошибка входа через Google:", error);
      let message = t("sign-up.googleError");
      if (error.code === "auth/popup-closed-by-user")
        message = t("sign-up.popupClosed");
      else if (error.code === "auth/cancelled-popup-request")
        message = t("sign-up.popupCancelled");
      else if (error.code === "auth/account-exists-with-different-credential")
        message = t("sign-up.credentialConflict");
      else if (error.code === "auth/auth-domain-config-error")
        message = t("sign-up.domainError");
      alert(message);
    } finally {
      setIsLoadingGoogleAuth(false);
    }
  };

  return (
    <Form
      imageSrc="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-9890.jpg?w=360"
      imageAlt="Иллюстрация регистрации"
    >
      <div className={styles.formHeader}>
        <h1>{t("sign-up.account")}</h1>
        <p>{t("sign-up.enter")}</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.authForm}>
        <InputField
          type="text"
          name="name"
          placeholder={t("sign-up.name")}
          value={formData.name}
          onChange={handleChange}
          disabled={isLoadingForm || isLoadingGoogleAuth}
        />
        <InputField
          type="text"
          name="emailOrPhone"
          placeholder={t("sign-up.email")}
          value={formData.emailOrPhone}
          onChange={handleChange}
          disabled={isLoadingForm || isLoadingGoogleAuth}
        />
        <InputField
          type="password"
          name="password"
          placeholder={t("sign-up.password")}
          value={formData.password}
          onChange={handleChange}
          disabled={isLoadingForm || isLoadingGoogleAuth}
        />
        <InputField
          type="text"
          name="address"
          placeholder={t("sign-up.address")}
          value={formData.address}
          onChange={handleChange}
          disabled={isLoadingForm || isLoadingGoogleAuth}
        />
        <AuthButton
          type="submit"
          fullWidth
          disabled={isLoadingForm || isLoadingGoogleAuth}
        >
          {isLoadingForm ? t("sign-up.creating") : t("sign-up.create")}
        </AuthButton>
      </form>

      <GoogleAuthButton
        onClick={handleGoogleSignInRegister}
        disabled={isLoadingGoogleAuth || isLoadingForm}
      >
        {isLoadingGoogleAuth ? t("sign-up.loading") : t("sign-up.google")}
      </GoogleAuthButton>

      <p className={styles.loginText}>
        {t("sign-up.all")} <a href="/login">{t("sign-up.login")}</a>
      </p>
    </Form>
  );
};
  