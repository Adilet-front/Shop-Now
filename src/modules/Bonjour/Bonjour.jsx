import { useTranslation } from "react-i18next";
import styles from "./Bonjour.module.scss";

export const Bonjour = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.bonjourGen}>
        <div className={styles.bonjourOne}>
          <img src="/public/images/services.png" alt="сервис" />
          <h1>{t("bonjour.Bonjour_One_h1")}</h1>
          <p>{t("bonjour.Bonjour_One_p")}</p>
        </div>
        <div className={styles.bonjourTwo}>
          <img src="/public/images/headphones.png" alt="наушники"/>
          <h1>{t("bonjour.Bonjour_Two_h1")}</h1>
          <p>{t("bonjour.Bonjour_Two_p")}</p>
        </div>
        <div className={styles.bonjourThree}>
          <img src="/public/images/security.png" alt="защита" />
          <h1>{t("bonjour.Bonjour_Three_h1")}</h1>
          <p>{t("bonjour.Bonjour_Three_p")}</p>
        </div>
      </div>
    </>
  );
};
