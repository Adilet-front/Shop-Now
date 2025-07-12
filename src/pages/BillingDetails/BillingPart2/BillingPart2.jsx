import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./BillingPart2.module.scss";

export const BillingPart2 = () => {
  const { t } = useTranslation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("cashOnDelivery");

  const location = useLocation();
  const {
    cartItems = [],
    subtotal = 0,
    total = 0,
    shippingCost = 0,
  } = location.state || {};

  const handlePlaceOrder = () => {
    alert(t("Billing.order_success"));
  };

  return (
    <div className={styles.BillingPart2Wrapper}>
      <div className={styles.BillingPart2Container}>
        <div className={styles.OrderSummary}>
          {cartItems.length === 0 ? (
            <p className={styles.emptyCartMessage}>
              {t("Billing.no_items_in_cart")}
            </p>
          ) : (
            cartItems.map((item) => (
              <div className={styles.ProductItem} key={item.id}>
                <div className={styles.ProductInfo}>
                  <img src={item.Image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <span className={styles.ProductPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))
          )}

          {cartItems.length > 0 && <div className={styles.DividerLine}></div>}

          <div className={styles.TotalsBlock}>
            <div className={styles.TotalRow}>
              <span>{t("Billing.Billng_pay")}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.DividerLine}></div>
            <div className={styles.TotalRow}>
              <span>{t("Billing.Billng_pay2")}</span>
              <span>
                {shippingCost === 0
                  ? t("cart.free")
                  : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <div className={styles.DividerLine}></div>
            <div className={styles.TotalRow}>
              <span>{t("Billing.Billng_pay3")}</span>
              <span className={styles.FinalTotal}>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.PaymentMethods}>
            {/* Способы оплаты (оставляем без изменений) */}
          </div>

          <div className={styles.ActionsBlock}>
            <div className={styles.ActionsCupon}>
              <input
                type="text"
                placeholder={t("cart.coupon_placeholder")}
                className={styles.CouponInput}
              />
              <button className={styles.ApplyCouponButton}>
                {t("cart.apply_coupon")}
              </button>
            </div>
            <button
              className={styles.PlaceOrderButton}
              onClick={handlePlaceOrder}
            >
              {t("Billing.Billing_card5")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
