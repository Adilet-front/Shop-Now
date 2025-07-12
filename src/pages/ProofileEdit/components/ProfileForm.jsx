import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ProfileForm.scss";

const ProfileForm = ({ initialData, onSave, onCancel, isLoading }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = t("profileEdit.validation.firstNameRequired");
    if (!formData.lastName.trim())
      newErrors.lastName = t("profileEdit.validation.lastNameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("profileEdit.validation.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("profileEdit.validation.emailInvalid");
    }
    if (!formData.address.trim())
      newErrors.address = t("profileEdit.validation.addressRequired");

    if (formData.newPassword || formData.confirmNewPassword) {
      if (!formData.currentPassword) {
        newErrors.currentPassword = t(
          "profileEdit.validation.currentPasswordRequired"
        );
      }
      if (!formData.newPassword) {
        newErrors.newPassword = t("profileEdit.validation.newPasswordRequired");
      } else if (formData.newPassword.length < 6) {
        newErrors.newPassword = t("profileEdit.validation.newPasswordLength");
      }
      if (formData.newPassword !== formData.confirmNewPassword) {
        newErrors.confirmNewPassword = t(
          "profileEdit.validation.passwordsMismatch"
        );
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">{t("profileEdit.firstName")}</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">{t("profileEdit.lastName")}</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">{t("profileEdit.email")}</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">{t("profileEdit.address")}</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.address && (
            <span className="error-message">{errors.address}</span>
          )}
        </div>
      </div>

      <h3>{t("profileEdit.passwordChanges")}</h3>
      <div className="form-row">
        <div className="form-group full-width">
          <label htmlFor="currentPassword">
            {t("profileEdit.currentPassword")}
          </label>
          <input
            type="password"
            id="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.currentPassword && (
            <span className="error-message">{errors.currentPassword}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group full-width">
          <label htmlFor="newPassword">{t("profileEdit.newPassword")}</label>
          <input
            type="password"
            id="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.newPassword && (
            <span className="error-message">{errors.newPassword}</span>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group full-width">
          <label htmlFor="confirmNewPassword">
            {t("profileEdit.confirmNewPassword")}
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.confirmNewPassword && (
            <span className="error-message">{errors.confirmNewPassword}</span>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn cancel-btn"
          onClick={onCancel}
          disabled={isLoading}
        >
          {t("profileEdit.cancel")}
        </button>
        <button type="submit" className="btn save-btn" disabled={isLoading}>
          {isLoading ? t("profileEdit.saving") : t("profileEdit.saveChanges")}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
