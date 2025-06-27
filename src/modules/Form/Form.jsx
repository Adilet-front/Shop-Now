import React from "react";
import styles from "./Form.module.scss";

export const Form = ({ children, imageSrc, imageAlt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>
      <div className={styles.formSection}>{children}</div>
    </div>
  );
};
