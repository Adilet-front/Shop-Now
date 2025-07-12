import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./BillingDetails.module.scss";
import { BillingPart1 } from "./BillingPart1/BillingPart1";
import { BillingPart2 } from "./BillingPart2/BillingPart2";

export const BillingDetails = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.BillingDetailsMain}>
        <div className={styles.DetailsPay}>
          <BillingPart1 />
          <BillingPart2 />
        </div>
      </div>
    </>
  );
};
