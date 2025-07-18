import { NavLink } from "react-router";
import styles from "./HeaderPart2.module.scss";
import { Trans, useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const phones = [
  {
    id: 1,
    title: "iPhone 14 Series",
    description: "Buy Now",
    logo: "/images/appleLogo.svg",
    arrow: "/images/lineInright.svg",
    image: "/images/largeIphone.svg",
  },
  {
    id: 2,
    title: "iPhone 15 Series",
    description: "Buy Now",
    logo: "/images/appleLogo.svg",
    arrow: "/images/lineInright.svg",
    image: "/images/largeIphone.svg",
  },
  {
    id: 3,
    title: "iPhone 16 Series",
    description: "Buy Now",
    logo: "/images/appleLogo.svg",
    arrow: "/images/lineInright.svg",
    image: "/images/largeIphone.svg",
  },
  {
    id: 4,
    title: "iPhone 17 Series",
    description: "Buy Now",
    logo: "/images/appleLogo.svg",
    arrow: "/images/lineInright.svg",
    image: "/images/largeIphone.svg",
  },
  {
    id: 5,
    title: "iPhone 18 Series",
    description: "Buy Now",
    logo: "/images/appleLogo.svg",
    arrow: "/images/lineInright.svg",
    image: "/images/largeIphone.svg",
  },

  // Добавь ещё по необходимости
];

export const HeaderPart2 = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.HeaderPart2}>
      <div className={styles.headerInner}>
        <div className={styles.HeadersLeft}>
          <nav className={styles.HeaderNav}>
            <ul>
              <li>
                <NavLink to="/women">{t("categories.women")}</NavLink>
              </li>
              <li>
                <NavLink to="/mens">{t("categories.men")}</NavLink>
              </li>
              <li>
                <NavLink to="/electronics">
                  {t("categories.electronics")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/lifestyle">{t("categories.lifestyle")}</NavLink>
              </li>
              <li>
                <NavLink to="/medicine">{t("categories.medicine")}</NavLink>
              </li>
              <li>
                <NavLink to="/sport">{t("categories.sport")}</NavLink>
              </li>
              <li>
                <NavLink to="/baby-toys">{t("categories.toys")}</NavLink>
              </li>
              <li>
                <NavLink to="/pets">{t("categories.pets")}</NavLink>
              </li>
              <li>
                <NavLink to="/health">{t("categories.health")}</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.line2}></div>
        <div className={styles.emptySpace}></div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          direction="horizontal"
          loop={true}
          pagination={{ clickable: true }}
          className={`${styles.mySwiper}`}
          style={{
            "--swiper-pagination-color": "#DB4444", // красная активная точка
            "--swiper-pagination-bullet-inactive-color": "#666", // серые точки
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "7px",
          }}
          // Настройки касания:
          simulateTouch={true} // включить имитацию тача для мыши (по умолчанию true)
          touchRatio={1} // чувствительность свайпа
          touchAngle={45} // угол, при котором свайп считается горизонтальным
          threshold={5} // минимальное расстояние в пикселях для начала свайпа
          longSwipes={true} // длинные свайпы включены
          longSwipesRatio={0.5} // пропорция свайпа для переключения слайда
          longSwipesMs={300} // длительность длинного свайпа
        >
          {phones.map((phone) => (
            <SwiperSlide key={phone.id}>
              <div className={styles.HeadersMostRight}>
                <div className={styles.HeaderText}>
                  <div className={styles.HeadersLogoApple}>
                    <img src={phone.logo} alt={`${phone.title} Logo`} />
                    <p>{phone.title}</p>
                  </div>
                  <h1 className={styles.headertext2H1}>
                    <Trans
                      i18nKey="HeaderPart2.sales"
                      components={{ br: <br /> }}
                      values={{ discount: "10%" }}
                    />
                  </h1>
                  <p>
                    {t("start_block.BuyNow")}{" "}
                    <img src="/public/images/lineInright.svg" alt="" />
                  </p>
                </div>

                <div className={styles.HeadersMostRightRight}>
                  <img src={phone.image} alt={phone.title} />
                </div>
              </div>
              <div className={styles.emptyRight}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
