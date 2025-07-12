import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Part1OurStory.module.scss"


export const Part1OurStory = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutUsGen}>
      <div className={styles.aboutUsNav}>
        <NavLink to="/home">
          <span>{t("About_Us.about_us_text1")}</span>
          </NavLink>
        <span>/</span>
        <span>{t("About_Us.about_us_text2")}</span>
      </div>
      <div className={styles.aboutUsMid}>
        <div className={styles.aboutUsText}>
          <h1>{t("About_Us.about_us_title")}</h1>
          <p>{t("About_Us.about_us_text3")}</p>
          <p>{t("About_Us.about_us_text4")}</p>
        </div>
        <div className={styles.aboutUsImg}>
          <img src="/images/AboutUs.png" alt="главная фотка" />
        </div>
      </div>
    </div>
  );
};

