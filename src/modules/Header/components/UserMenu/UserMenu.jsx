// components/UserMenu.js
import React, { useState, useRef, useEffect } from "react";
import styles from "./UserMenu.module.scss"; // SCSS стили, опишем ниже

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div className={styles.userMenuWrapper} ref={menuRef}>
      <div onClick={() => setOpen(!open)} className={styles.iconButton}>
        <img
          src={open ? "/images/userYellow.svg" : "/images/userWhite.svg"}
          alt="user"
        />
      </div>
      {open && (
        <div className={styles.dropdown}>
          <ul>
            <li>
              <img src="images/userElseWhite.svg" alt="user" /> Manage My
              Account
            </li>
            <li>
              <img src="images/icon-mallbag.svg" alt="mallbag" /> My Order
            </li>
            <li>
              <img src="images/icon-cancel.svg" alt="icon-cancel" /> My Cancellations
            </li>
            <li>
              <img src="images/Icon-Reviews.svg" alt="" />My Reviews
            </li>
            <li>
              <img src="images/Icon-logout.svg" alt="" /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
