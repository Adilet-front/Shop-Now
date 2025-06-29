import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";



export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };

  return (
    <header>
      <div className={styles.WrapperHeader}>
        <div className={styles.upHeader}>
          <div className={styles.text}>
            <p className={styles.text1}>
              {t("start_block.text1")}
              <NavLink to={""}>{t("start_block.BuyNow")}</NavLink>
            </p>
          </div>

          <div className={styles.languageSelector}>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className={styles.enSvg}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.downHeader}>
        <h2>{t("start_block.Exclusive")}</h2>
        <nav>
          <li>
            <NavLink>{t("start_block.main")}</NavLink>
          </li>
          <li>
            <NavLink>{t("start_block.Contact")}</NavLink>
          </li>
          <li>
            <NavLink>{t("start_block.About")}</NavLink>
          </li>
          <li>
            <NavLink>{t("start_block.SignUp")}</NavLink>
          </li>
        </nav>
        <div className={styles.inputWrapper}>
          <div className={styles.InInputWrapper}>
            <input type="text" placeholder={t("start_block.lookFor")} />

            <NavLink>
              <img
                className={styles.searchSvg}
                src="/public/images/Search.svg"
                alt=""
              />
            </NavLink>
          </div>

          <div className={styles.LastImages}>
            <NavLink>
              <img src="/public/images/Wishlist.svg" alt="" />
            </NavLink>
            <NavLink>
              <img src="/public/images/Cart1.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </header>
  );
};
