
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

import { Form } from "../../../modules/Form/Form";
import { InputField } from "../../../modules/Form/components/InputField/InputField";
import { AuthButton } from "../../../modules/Form/components/AuthButton/AuthButton";
import styles from "../LogIn/Login.module.scss";

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailOrPhone, password } = formData;

    if (!emailOrPhone || !password) {
      alert(t("login.fillAllFields"));
      return;
    }

    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailOrPhone,
        password
      );
      alert(
        `${t("login.success")}, ${userCredential.user.email || t("login.user")}`
      );
      setFormData({ emailOrPhone: "", password: "" });
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      alert(t("login.error") + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      imageSrc="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-9890.jpg?w=360"
      imageAlt={t("login.imageAlt")}
    >
      <div className={styles.formHeader}>
        <h2>{t("login.title")}</h2>
        <p>{t("login.subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.authForm}>
        <InputField
          type="text"
          name="emailOrPhone"
          placeholder={t("login.emailOrPhonePlaceholder")}
          value={formData.emailOrPhone}
          onChange={handleChange}
          disabled={isLoading}
        />
        <InputField
          type="password"
          name="password"
          placeholder={t("login.passwordPlaceholder")}
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
        />
        <div className={styles.loginActions}>
          <AuthButton type="submit" disabled={isLoading}>
            {t("login.logInButton")}
          </AuthButton>
          <p className={styles.forgotPasswordText}>
            <a href="/forgot-password">{t("login.forgotPasswordLink")}</a>
          </p>
        </div>
      </form>
    </Form>
  );
};
