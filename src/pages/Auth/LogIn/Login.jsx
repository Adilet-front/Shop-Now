  
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../LogIn/Login.module.scss"

export const Login = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.emailOrPhone || !formData.password) {
      console.log("Пожалуйста, заполните все поля.");
      return;
    }

  };

  return (
    <div className={styles.container}>
    
      <div className={styles.imageSection}>
        <img
          src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-9890.jpg?w=360"
          alt="Online Shopping Illustration"
          className={styles.image}
        />
      </div>

   
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
        
          <h2>{t("login.title")}</h2>
        
          <p>{t("login.subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
         
          <input
            type="text"
            name="emailOrPhone"
            placeholder={t("login.emailOrPhonePlaceholder")}
            value={formData.emailOrPhone}
            onChange={handleChange}
            className={styles.input}
          />
      
          <input
            type="password"
            name="password"
            placeholder={t("login.passwordPlaceholder")}
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
      
        </form>

        <div className={styles.login}>
           
          <button type="submit" className={styles.button}>
            {t("login.logInButton")}
          </button>
        
      
        <p className={styles.forgetPasswordText}>
          <a href="/forgot-password">{t("login.forgotPasswordLink")}</a>
        </p>
        </div> 
 
      </div>
    </div>
  );
};

