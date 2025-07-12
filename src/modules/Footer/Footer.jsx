import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";
import { NavLink } from "react-router";
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className={styles.WrapperFooter}>
        <div className={styles.foter}>
          <div className={styles.foterNavigation}>
            <div className={styles.foterNavigationFirst}>
              <NavLink to="/home"> <h2>{t("footer.exclusive")}</h2>
              </NavLink>
             
              <h3>{t("footer.subscribe")}</h3>
              <p>{t("footer.get")}</p>
              <div className={styles.foterNavigationFirstInput}>
                <input type="text" placeholder={t("footer.enter_email")} />
                <button>
                  <img src="/public/images/Vector.svg" alt="vector" />
                </button>
              </div>
            </div>
            <div className={styles.foterNavigationTwo}>
              <h3>{t("footer.support")}</h3>
              <NavLink to="https://www.google.com/maps/@42.8111774,73.8440609,18z?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D">
                <p>{t("footer.bijoy")}</p>{" "}
              </NavLink>

              <p>adiletadilet@gmail.com</p>
              <p>+996-505-02-33-56</p>
            </div>
            <div className={styles.foterNavigationThree}>
              <h3>{t("footer.account")}</h3>
              <nav>
                <NavLink to="/profile">
                  <li>{t("footer.myAccount")}</li>
                </NavLink>
                <NavLink to="/">
                  {" "}
                  <li>{t("footer.login/Register")}</li>
                </NavLink>

                <NavLink to="/Cart">
                  <li>{t("footer.cart")}</li>
                </NavLink>
                <NavLink to="/favorites">
                  <li>{t("footer.wishlist")}</li>
                </NavLink>

                <NavLink to="/home">
                  <li>{t("footer.shop")}</li>
                </NavLink>
              </nav>
            </div>
            <div className={styles.foterNavigationFour}>
              <h3>{t("footer.quickLink")}</h3>
              <nav>
                <NavLink to="https://bearingstore.ru/brands/fag/">
                  <li>{t("footer.privacyPolicy")}</li>
                </NavLink>
                <NavLink to="https://bearingstore.ru/brands/fag/">
                  <li>{t("footer.termsOfUse")}</li>
                </NavLink>
                <NavLink to="https://bearingstore.ru/brands/fag/">
                  <li>{t("footer.fAQ")}</li>
                </NavLink>

                <NavLink to="/contact">
                  <li>{t("footer.contact")}</li>
                </NavLink>
              </nav>
            </div>
            <div className={styles.foterNavigationFive}>
              <NavLink to="https://play.google.com/store/games?device=windows&pli=1">
              <h3>{t("footer.downloadApp")}</h3>
              </NavLink>
              
              <div className={styles.foterNavigationFivePrice}>
                <p>{t("footer.save")}</p>
                <div className={styles.foterNavigationFiveQr}>
                  <img src="/public/images/Qr Code.svg" alt="qr" />
                  <div className={styles.foterNavigationFiveDovland}>
                    <img src="/public/images/Google_play.svg" alt="google" />
                    <img src="/public/images/aple.svg" alt="aple" />
                  </div>
                </div>
              </div>
              <div className={styles.foterNavigationFiveSoshelMedia}>
                <img src="/public/images/Icon-Facebook.svg" alt="facebook" />
                <img src="/public/images/Icon-Twitter.svg" alt="twiter" />
                <img src="/public/images/icon-instagram.svg" alt="instagram" />
                <img src="/public/images/Icon-Linkedin.svg" alt="likedin" />
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <img src="/public/images/icon-copyright.svg" alt="copyring" />
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
