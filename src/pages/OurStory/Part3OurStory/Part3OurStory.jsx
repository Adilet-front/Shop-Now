import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./Part3OurStory.module.scss";
import React, { useEffect } from "react";

export const Part3OurStory = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.Part3OurStoryGen}>
        <div className={styles.People1}>
          <div className={styles.People1Img}>
            <img src="/public/images/AboutUsPeople11.png" alt="чел1" />
          </div>

          <div className={styles.people1text}>
            <h1>{t("About_Us.about_us_text9")}</h1>
            <p>{t("About_Us.about_us_text9a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>
        <div className={styles.People2}>
          <div className={styles.People2Img}>
            <img src="/public/images/AboutUsPeople2.png" alt="чел2" />
          </div>

          <div className={styles.people2text}>
            <h1>{t("About_Us.about_us_text10")}</h1>
            <p>{t("About_Us.about_us_text10a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>

        <div className={styles.People3}>
          <div className={styles.People3Img}>
            <img src="/public/images/AboutUsPeople3.png" alt="чел3" />
          </div>

          <div className={styles.people3text}>
            <h1>{t("About_Us.about_us_text11")}</h1>
            <p>{t("About_Us.about_us_text11a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>

        <div className={styles.People4}>
          <div className={styles.People4Img}>
            <img src="/public/images/AboutUsPeople4.png" alt="чел4" />
          </div>

          <div className={styles.people4text}>
            <h1>{t("About_Us.about_us_text12")}</h1>
            <p>{t("About_Us.about_us_text12a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>

        <div className={styles.People5}>
          <div className={styles.photoPeople5}>
            <img src="/public/images/AboutUsPeople5 .png" alt="чел5" />
          </div>
          <div className={styles.people5text}>
            <h1>{t("About_Us.about_us_text13")}</h1>
            <p>{t("About_Us.about_us_text13a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>

        <div className={styles.People6}>
          <div className={styles.photoPeople6}>
            <img src="/public/images/AboutUsPhoto6.png" alt="чел6" />
          </div>
          <div className={styles.people6text}>
            <h1>{t("About_Us.about_us_text14")}</h1>
            <p>{t("About_Us.about_us_text14a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>
        <div className={styles.People7}>
          <div className={styles.photoPeople7}>
            <img src="/public/images/AboutUsPeople7.png" alt="чел7" />
          </div>
          <div className={styles.people7text}>
            <h1>{t("About_Us.about_us_text15")}</h1>
            <p>{t("About_Us.about_us_text15a")}</p>
            <img src="/public/images/socialmedias.png" alt="приложения" />
          </div>
        </div>
      </div>
    </>
  );
};
