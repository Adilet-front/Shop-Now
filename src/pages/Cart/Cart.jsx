import React, { useState, useEffect, useCallback } from "react";
import styles from "./Cart.module.scss";
import { useTranslation } from "react-i18next";
import {
  fetchCartItems,
  updateCartItemQuantity,
  removeFromCartAPI,
} from "../../constants/fetchProducts";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { t } = useTranslation();

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const shippingCost = 0;

  const loadCartItems = useCallback(async () => {
    try {
      const items = await fetchCartItems();
      setCartItems(items);
    } catch (error) {
      console.error("Error loading cart items:", error);
    }
  }, []);

  useEffect(() => {
    loadCartItems();
  }, [loadCartItems]);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + shippingCost);
  }, [cartItems, shippingCost]);

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      await handleRemoveItem(itemId);
      return;
    }
    try {
      await updateCartItemQuantity(itemId, newQuantity);
      loadCartItems();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const success = await removeFromCartAPI(itemId);
      if (success) {
        loadCartItems();
      } else {
        console.error("Failed to remove item from cart.");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className={styles.CartWrapper}>
      <div className={styles.HomeCart}>
        <NavLink className={styles.Navi} to={"/"}>
          {t("cart.home")}
        </NavLink>
        <span>{t("cart.cart")}</span>
      </div>

      <div className={styles.Products}>
        <p>{t("cart.product")}</p>
        <p>{t("cart.price")}</p>
        <p>{t("cart.quantity")}</p>
        <p>{t("cart.subtotal")}</p>
      </div>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", padding: "40px 0" }}>
          {t("cart.empty")}
        </p>
      ) : (
        cartItems.map((item) => (
          <div className={styles.ProductRow} key={item.id}>
            <div className={styles.ProductInfo}>
              <img src={item.Image} alt={item.name} />
              <span>{item.name}</span>
            </div>
            <p className={styles.ProductPrice}>${item.price.toFixed(2)}</p>
            <div className={styles.ProductQuantity}>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <p className={styles.ProductSubtotal}>
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))
      )}

      <div className={styles.CartShopButtons}>
        <button className={styles.returnToShop}>{t("cart.return")}</button>
        <button className={styles.UpdateCart} onClick={loadCartItems}>
          {t("cart.update")}
        </button>
      </div>

      <div className={styles.LastDown}>
        <div className={styles.couponscodeLeft}>
          <input
            type="text"
            name="code"
            id={styles.coupons}
            placeholder={t("cart.coupon_placeholder")}
          />
          <button className={styles.applyCode}>{t("cart.apply_coupon")}</button>
        </div>

        <div className={styles.CartTotalRight}>
          <h3>{t("cart.cart_total")}</h3>

          <div className={styles.Price1}>
            <p>{t("cart.subtotal_label")}</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className={styles.line2}></div>

          <div className={styles.Price2}>
            <p>{t("cart.shipping")}</p>
            <p>
              {shippingCost === 0
                ? t("cart.free")
                : `$${shippingCost.toFixed(2)}`}
            </p>
          </div>

          <div className={styles.line3}></div>

          <div className={styles.Price3}>
            <p>{t("cart.total")}</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <NavLink
            to="/billing-details"
            state={{ cartItems, subtotal, total, shippingCost }}
          >
            <button className={styles.ProceesToCheckout}>
              {t("cart.checkout")}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
