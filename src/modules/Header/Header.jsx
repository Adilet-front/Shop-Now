import { NavLink } from "react-router";
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
              <NavLink to={""}>ShopNow</NavLink>
            </p>
          </div>

          <div className={styles.languageSelector}>
            <button
              onClick={() => changeLanguage("en")}
              className={styles.enSvg}
            >
              {t("start_block.button_En")}
              <div className={styles.iconLang}>
                <img src="/images/Ensvg.svg" alt="EN" />
              </div>
            </button>

            <div className={styles.langDropDown}>
              <button onClick={() => changeLanguage("ru")}>
                {t("start_block.button_Ru")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.downHeader}>
        <h2>Exclusive</h2>
        <nav>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Sign Up</NavLink>
          </li>
        </nav>
        <div className={styles.inputWrapper}>
          <div className={styles.InInputWrapper}>
            <input type="text" placeholder="What are you looking for?" />
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
