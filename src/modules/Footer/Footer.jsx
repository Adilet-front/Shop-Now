import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import styles from "./Footer.module.scss";
export const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  return (
    <footer>
      <div className={styles.WrapperFooter}>
        <div className={styles.foter}>
          <div className={styles.foterNavigation}>
            <div className={styles.foterNavigationFirst}>
              <h2>{t("footer.exclusive")}</h2>
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
              <p>
               {t("footer.bijoy")}
              </p>
              <p>adilettinadilettin@gmail.com</p>
              <p>+996-505-02-33-56</p>
            </div>
            <div className={styles.foterNavigationThree}>
              <h3>{t("footer.account")}</h3>
              <nav>
                <li>{t("footer.myAccount")}</li>
                <li>{t("footer.login/Register")}</li>
                <li>{t("footer.cart")}</li>
                <li>{t("footer.wishlist")}</li>
                <li>{t("footer.shop")}</li>
              </nav>
            </div>
            <div className={styles.foterNavigationFour}>
              <h3>{t("footer.quickLink")}</h3>
              <nav>
                <li>{t("footer.privacyPolicy")}</li>
                <li>{t("footer.termsOfUse")}</li>
                <li>{t("footer.fAQ")}</li>
                <li>{t("footer.contact")}</li>
              </nav>
            </div>
            <div className={styles.foterNavigationFive}>
              <h3>{t("footer.downloadApp")}</h3>
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
