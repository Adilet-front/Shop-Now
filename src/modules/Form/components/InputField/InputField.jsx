import React from "react";
import styles from "./InputField.module.scss";

export const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
      disabled={disabled} // Добавляем пропс disabled
    />
  );
};
