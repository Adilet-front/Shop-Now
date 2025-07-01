import React from "react";
import styles from "./AuthButton.module.scss";

export const AuthButton = ({
  children,
  type = "submit",
  onClick,
  fullWidth = false,
  disabled = false, 
}) => {
  const buttonClass = fullWidth
    ? `${styles.button} ${styles.fullWidth}`
    : styles.button;
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};