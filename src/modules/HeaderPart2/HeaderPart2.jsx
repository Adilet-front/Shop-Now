import { NavLink } from "react-router";
import styles from "./HeaderPart2.module.scss";
import { Trans, useTranslation } from "react-i18next";

export const HeaderPart2 = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.HeaderPart2}>
      <div className={styles.HeadersLeft}>
        <nav>
          <ul>
            <li>
              <NavLink to={"/women"}>Women's Fashion</NavLink>
            </li>
            <li>
              <NavLink to={"/mens"}>Men's Fashion</NavLink>
            </li>
            <li>
              <NavLink to={"/electronics"}>Electronics</NavLink>
            </li>
            <li>
              <NavLink to={"/lifestyle"}>Home & Lifestyle</NavLink>
            </li>
            <li>
              <NavLink to={"medicine"}>Medicine</NavLink>
            </li>
            <li>
              <NavLink to={"/sport"}>Sports & Outdoor</NavLink>
            </li>
            <li>
              <NavLink to={"/baby-toys"}>Baby’s & Toys</NavLink>
            </li>
            <li>
              <NavLink to={"/pets"}>Groceries & Pets</NavLink>
            </li>
            <li>
              <NavLink to={"/health"}>Health & Beauty</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.line2}></div>

      <div className={styles.HeadersMostRight}>
        <div className={styles.HeaderText}>
          <div className={styles.HeadersLogoApple}>
            <img src="/public/images/appleLogo.svg" alt="" />
            <p>iPhone 14 Series</p>
          </div>
          <h1>
            <Trans
              i18nKey="start_block.sales"
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
          <img src="/public/images/largeIphone.svg" alt="" />
        </div>
      </div>

      <div className={styles.headerDownCounter}></div>
    </section>
  );
};
