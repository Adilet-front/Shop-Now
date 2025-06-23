import { NavLink } from "react-router";
import styles from "./NewArrival.module.scss";
import { useTranslation } from "react-i18next";

export const NewArrival = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.NewArrivalUp}>
        <div className={styles.newArrivalStart}>
          <div className={styles.NewArrivalBox}></div>
          <h2>Featured</h2>
        </div>
        <h2>{t("new_arrival.New_Arrival")}</h2>
        </div>

        <div className={styles.NewArrivalGen}>
          

          <div className={styles.NewArrivalLeft}>
            <div className={styles.NewArrivalLeftImg}>
              <img src="/public/images/playstation.png" alt="фотка плойки" />
            </div>
            <div className={styles.NewArrivalLeftText}>
              <h1>PlayStation 5</h1>
              <p>{t("new_arrival.New_Arrival_text")}</p>
              <NavLink>{t("new_arrival.shop_now")}</NavLink>
            </div>
          </div>

          <div className={styles.NewArrivalRight}>
            <div className={styles.NewArrivalRightTop}>
              <div className={styles.NewArrivalRightTopImg}>
                <img src="/public/images/women.png" alt="фото жeнщины" />
              </div>
              <div className={styles.NewArrivalRightToptext}>
                <h1>{t("new_arrival.womens_collection")}</h1>
                <p>{t("new_arrival.womens_collection_text")}</p>
                <NavLink>{t("new_arrival.shop_now")}</NavLink>
              </div>
            </div>

            <div className={styles.NewArrivalRightUnder}>
              <div className={styles.NewArrivalRightOne}>
                <div className={styles.NewArrivalRightOneImg}>
                  <img src="/public/images/speakers.png" alt="колонка" />
                </div>
                <div className={styles.NewArrivalRightOneText}>
                  <h1>{t("new_arrival.speakers")}</h1>
                  <p>{t("new_arrival.speakers_text")}</p>
                  <NavLink>{t("new_arrival.shop_now")}</NavLink>
                </div>
              </div>

              <div className={styles.NewArrivalRightTwo}>
                <div className={styles.NewArrivalRightTwoImg}>
                  <img src="/public/images/parfume.png" alt="фото духов" />
                </div>
                <div className={styles.NewArrivalRightTwoText}>
                  <h1>{t("new_arrival.Perfume")}</h1>
                  <p>{t("new_arrival.Perfume_text")}</p>
                  <NavLink>{t("new_arrival.shop_now")}</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
