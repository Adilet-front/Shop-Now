import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import UserMenu from "./components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import SearchWithAutoComplete from "./components/SearchWithAutoComplete/SearchWithAutoComplete";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { data } = useSelector((s) => s.favorites);

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
        <NavLink to="/home">
          <h2>{t("start_block.Exclusive")}</h2>
        </NavLink>

        <nav>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              {t("start_block.main")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              {t("start_block.Contact")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to="/our-story"
            >
              {t("start_block.About")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sign-up"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              {t("start_block.SignUp")}
            </NavLink>
          </li>
        </nav>
        <div className={styles.inputWrapper}>
          <SearchWithAutoComplete />
          <div className={styles.LastImages}>
            <NavLink className={styles.wrapperFav} to={"favorites"}>
              <img src="/public/images/Wishlist.svg" alt="wish" />
              <p className={styles.countFav}>{data?.length}</p>
            </NavLink>
            <NavLink to={"Cart"}>
              <img src="/public/images/Cart1.svg" alt="cart" />
            </NavLink>
          </div>
          <UserMenu />
        </div>
      </div>
      <div className={styles.line}></div>
    </header>
  );
};
