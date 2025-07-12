import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./BillingPart1.module.scss";

export const BillingPart1 = () => {
  const { t } = useTranslation();
const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className={styles.BillingPart1Gen}>
        <div className={styles.BillingStart}>
          <NavLink>
            <span>{t("Billing.Billing_start")}</span>
          </NavLink>
          <span>/</span>
          <NavLink to="/profile">
            <span>{t("Billing.Billing_start2")}</span>
          </NavLink>

          <span>/</span>
          <NavLink to="/sign-up">
            <span>{t("Billing.Billing_start3")}</span>
          </NavLink>

          <span>/</span>
          <NavLink to="/Cart">
            <span>{t("Billing.Billing_start4")}</span>
          </NavLink>
          <span>/</span>
          <span>{t("Billing.Billing_start5")}</span>
        </div>
        <div className={styles.BillingMid}>
          <h1>{t("Billing.Billing_h1")}</h1>
          <div className={styles.BillingInputs}>
            <div className={styles.Binput1}>
              <div className={styles.Binput1Text}>
                <span>{t("Billing.Billing_input1")}</span>
                <span>*</span>
              </div>
              <input type="text" />
            </div>
            <div className={styles.Binput2}>
              <span>{t("Billing.Billing_input2")}</span>
              <input type="text" />
            </div>
            <div className={styles.Binput3}>
              <div className={styles.Binput3Text}>
                <span>{t("Billing.Billing_input3")}</span>
                <span>*</span>
              </div>
              <input type="text" />
            </div>
            <div className={styles.Binput4}>
              <span>{t("Billing.Billing_input4")}</span>
              <input type="text" />
            </div>
            <div className={styles.Binput5}>
              <div className={styles.Binput5Text}>
                <span>{t("Billing.Billing_input5")}</span>
                <span>*</span>
              </div>
              <input type="text" />
            </div>
            <div className={styles.Binput6}>
              <div className={styles.Binput6Text}>
                <span>{t("Billing.Billing_input6")}</span>
                <span>*</span>
              </div>
              <input type="text" />
            </div>
            <div className={styles.Binput7}>
              <div className={styles.Binput7Text}>
                <span>{t("Billing.Billing_input7")}</span>
                <span>*</span>
              </div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.BillingEnd}>
          <button
            onClick={() => setIsClicked((prev) => !prev)}
            className={`${styles.billingButton} ${
              isClicked ? styles.active : ""
            }`}
          >
            <img src="/public/images/VectorCheck.png" alt="" />
          </button>
          <p>{t("Billing.Billing_text")}</p>
        </div>
      </div>
    </>
  );
};
