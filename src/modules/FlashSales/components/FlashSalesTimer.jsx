import React, { useState, useEffect } from "react";
import styles from "./FlashSalesTimer.module.scss";
const FlashSalesTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 дня
    targetDate.setHours(23, 59, 59, 999);

    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.countdown}>
        {["days", "hours", "minutes", "seconds"].map((unit,) => (
          <div key={unit} className={styles.timeBlock}>
            <span className={styles.timeValue}>{timeLeft[unit]}</span>
            <span className={styles.unit}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSalesTimer;
