import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./BillingPart2.module.scss";

export const BillingPart2 = () => {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <div className={styles.BillingPart2}>
        <div className={styles.Billing2Start}>
          <div className={styles.Bstart1}></div>
          <div className={styles.Bstart2}>
            <div className={styles.BilPay1}>
              <div className={styles.B1text}>
                <span>{t("Billing.Billng_pay")}</span>
                <span>$</span>
              </div>
              <img src="/public/images/Line111.png" alt="line" />
            </div>
            <div className={styles.BilPay1}>
              <div className={styles.B1text}>
                <span>{t("Billing.Billng_pay2")}</span>
                <span>$</span>
              </div>
              <img src="/public/images/Line111.png" alt="line" />
            </div>
            <div className={styles.BilPay1}>
              <div className={styles.B1text}>
                <span>{t("Billing.Billng_pay3")}</span>
                <span>$</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Billing2Mid}>
  <div className={styles.Bimid1}>
    <button
      type="button"
      onClick={() => setSelectedCard("card0")}
      className={`${styles.circleButton} ${selectedCard === "card0" ? styles.active : ""}`}
    ></button>
    <p>{t("Billing.Billing_card")}</p>
    <img src="/public/images/CreditCard.png" alt="карты" />
  </div>
  <div className={styles.Bimid2}>
    <button
      type="button"
      onClick={() => setSelectedCard("card1")}
      className={`${styles.circleButton} ${selectedCard === "card1" ? styles.active : ""}`}
    ></button>
    <p>{t("Billing.Billing_card2")}</p>
  </div>
</div>


        <div className={styles.Billing2End}>
          <div className={styles.Bend1}>
            <input placeholder={t("Billing.Billing_card3")} type="text" />
            <button
              onClick={() => setSelectedCard("card2")}
              className={`${styles.circleButton} ${
                selectedCard === "card2" ? styles.active : ""
              }`}
            >
              {t("Billing.Billing_card4")}
            </button>
          </div>
          <button>{t("Billing.Billing_card5")}</button>
        </div>
      </div>
    </>
  );
};
