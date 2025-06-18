import { NavLink } from "react-router";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <header>
      <div className={styles.WrapperHeader}>
        <div className={styles.upHeader}>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink to={""}>ShopNow</NavLink>
          </p>

          <div className={styles.enSvg}>
            <p>English</p>
            <div className="iconLang">
              <img src="/public/images/Ensvg.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.downHeader}></div>
      </div>
    </header>
  );
};
