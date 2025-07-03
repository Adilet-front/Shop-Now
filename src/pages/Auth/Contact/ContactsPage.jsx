import React, { useState } from "react";
import styles from "./ContactsPage.module.scss";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export const ContactsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.errors.name");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.message");
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    const submittedData = { ...formData };
    setFormData({ name: "", email: "", phone: "", message: "" });

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        submittedData,
        "your_public_key"
      )
      .then(() => {
        alert(t("contact.formSubmitMessage"));
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(t("contact.formErrorMessage"));
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className={styles.contactsPage}>
      <div className={styles.breadcrumb}>
        <span className={styles.link} onClick={() => navigate("/")}>
          {t("contact.home")}
        </span>
        <span> / {t("contact.contact")}</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.infoSection}>
          <div className={styles.callUs}>
            <div className={styles.iconContainer}>📞</div>
            <h3>{t("contact.callToUsTitle")}</h3>
            <p>{t("contact.callToUsText1")}</p>
            <p>{t("contact.callToUsText2")}</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.writeUs}>
            <div className={styles.iconContainer}>✉️</div>
            <h3>{t("contact.writeToUsTitle")}</h3>
            <p>{t("contact.writeToUsText1")}</p>
            <p>{t("contact.writeToUsEmail1")}</p>
            <p>{t("contact.writeToUsEmail2")}</p>
          </div>
        </div>

        <form className={styles.formSection} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder={t("contact.yourNamePlaceholder")}
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder={t("contact.yourEmailPlaceholder")}
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}

            <input
              type="tel"
              name="phone"
              placeholder={t("contact.yourPhonePlaceholder")}
              className={styles.formInput}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder={t("contact.yourMessagePlaceholder")}
            className={styles.messageTextarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}

          <button
            type="submit"
            className={styles.sendMessageButton}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("contact.sending")
              : t("contact.sendMessageButton")}
          </button>
        </form>
      </div>
    </div>
  );
};
