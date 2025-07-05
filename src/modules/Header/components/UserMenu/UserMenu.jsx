// components/UserMenu.js
import React, { useState, useRef, useEffect } from "react";
import styles from "./UserMenu.module.scss"; // SCSS стили, опишем ниже
import {
  FaUser,
  FaShoppingBag,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

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
        <img src="/public/images/user.svg" alt="" />
      </div>
      {open && (
        <div className={styles.dropdown}>
          <ul>
            <li>
              <FaUser /> Manage My Account
            </li>
            <li>
              <FaShoppingBag /> My Order
            </li>
            <li>
              <FaTimesCircle /> My Cancellations
            </li>
            <li>
              <FaStar /> My Reviews
            </li>
            <li>
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
