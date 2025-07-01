// ContactsPage.jsx

import React, { useState } from "react";
import styles from "./ContactsPage.module.scss";
import { useTranslation } from "react-i18next";

export const ContactsPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(t("contact.formSubmitMessage"));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.contactsPage}>
      <div className={styles.breadcrumb}>
        <span>{t("contact.home")} / </span>
        <span>{t("contact.contact")}</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.infoSection}>
          <div className={styles.callUs}>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 15.5c-1.25 0-2.45-.25-3.57-.79-.66-.33-1.42-.18-1.93.31l-2.73 2.73c-3.57-2.73-6.26-5.42-9-9l2.73-2.73c.49-.51.65-1.27.31-1.93C8.75 4.45 8.5 3.25 8.5 2c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2h-3v10c0 1.1.9 2 2 2h3v-2.5c0-1.1.9-2 2-2s2 .9 2 2v2.5c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-10c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <h3>{t("contact.callToUsTitle")}</h3>
            <p>{t("contact.callToUsText1")}</p>
            <p>{t("contact.callToUsText2")}</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.writeUs}>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
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
            <input
              type="email"
              name="email"
              placeholder={t("contact.yourEmailPlaceholder")}
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
            />
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
          <button type="submit" className={styles.sendMessageButton}>
            {t("contact.sendMessageButton")}
          </button>
        </form>
      </div>
    </div>
  );
};
