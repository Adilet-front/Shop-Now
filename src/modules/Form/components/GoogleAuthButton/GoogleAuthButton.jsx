import React from "react";
import styles from "./GoogleAuthButton.module.scss";

export const GoogleAuthButton = ({ children, onClick, disabled = false }) => {
  return (
    <button
      className={styles.googleButton}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        src="https://img.icons8.com/color/18/000000/google-logo.png"
        alt="Google"
      />
      {children}
    </button>
  );
};
