import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./Part2OurStory.module.scss";
export const Part2OurStory = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.Part2OurStoryGen}>
        <div className={styles.Part2OurStoryPart1}>
          <img src="/public/images/AboutUs1.png" alt="картинка1" />
          <h1>10.5k</h1>
          <p>{t("About_Us.about_us_text5")}</p>
        </div>
        <div className={styles.Part2OurStoryPart2}>
          <img src="/public/images/AboutUs1.png" alt="картинка2" />
          <h1>33k</h1>
          <p>{t("About_Us.about_us_text6")}</p>
        </div>
<div className={styles.Part2OurStoryPart3}>
          <img src="/public/images/AboutUs3.png" alt="картинка3" />
          <h1>45.5k</h1>
          <p>{t("About_Us.about_us_text7")}</p>
        </div>
<div className={styles.Part2OurStoryPart4}>
          <img src="/public/images/aboutUs4.png" alt="картинка4" />
          <h1>25k</h1>
          <p>{t("About_Us.about_us_text8")}</p>
        </div>


      </div>
    </>
  );
};
