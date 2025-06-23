import styles from "../SignUp/Signup.module.scss"
import React, { useState } from "react";

import { useTranslation } from "react-i18next";

export const Signup = () => {


      const { t, i18n } = useTranslation();
       const changeLanguage = (Language) => {
         i18n.changeLanguage(Language);
       };

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.emailOrPhone || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Registering user:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-9890.jpg?w=360"
          alt="Sign Up Illustration"
          className={styles.image}
        />
      </div>

      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h1 style={{ fontSize: "36px" }}> {t("sign-up.account")}</h1>
          <p>{t("sign-up.enter")}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder={t('sign-up.name')}
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="emailOrPhone"
            placeholder={t('sign-up.email')}
            value={formData.emailOrPhone}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder={t('sign-up.password')}
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
           {t('sign-up.create')}
          </button>
        </form>

        <button className={styles.googleButton}>
          <img
            src="https://img.icons8.com/color/18/000000/google-logo.png"
            alt="Google"
          />
        {t('sign-up.google')}
        </button>

        <p className={styles.loginText}>
          {t('sign-up.all')} <a href="/login">{t('sign-up.login')}</a>
        </p>
      </div>
    </div>
  );
};
