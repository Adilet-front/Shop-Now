// src/modules/ExploreProducts/ExploreProducts.jsx

import { useEffect, useState, useRef } from "react";
import styles from "./FlashSales.module.scss";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegHeart,
  FaRegEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import FlashSalesTimer from "./components/FlashSalesTimer";

// Компонент рейтинга, он работает правильно
const StarRating = ({ rating, reviews }) => {
  const filledStarUrl = "https://www.svgrepo.com/show/13695/star.svg";
  if (!Array.isArray(rating)) return null;
  return (
    <div className={styles.starRating}>
      <div className={styles.starsContainer}>
        {rating.map((starUrl, index) =>
          starUrl === filledStarUrl ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} />
          )
        )}
      </div>
      <span className={styles.reviews}>({reviews || 0})</span>
    </div>
  );
};

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false); // Состояние для кнопки View All
  const itemsPerPage = 4;
  const sectionRef = useRef(null); // Для плавного скролла

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  const ourProducts = products.filter(
    (product) => product.categoryAll === "Today's"
  );

  const maxPage = Math.ceil(ourProducts.length / itemsPerPage) - 1;
  const handleNext = () => {
    if (page < maxPage) setPage(page + 1);
  };
  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setPage(0); // Возвращаемся на первую страницу
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- ГЛАВНАЯ ЛОГИКА ОТОБРАЖЕНИЯ ---
  // Если `showAll` true, показываем все. Иначе - показываем страницу.
  const visibleProducts = showAll
    ? ourProducts
    : ourProducts.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  if (ourProducts.length === 0) return null;

  return (
    <div className={styles.exploreProducts} ref={sectionRef}>
      <div className={styles.headerRow}>
        <div className={styles.categoryLabel}>
          <span className={styles.redDot}></span>
          <span>Today’s</span>
        </div>
      </div>
      <div className={styles.titleRow}>
        <h2 className={styles.title1}>
          Flash Sales
          <FlashSalesTimer />
        </h2>

        {/* 👇 СТРЕЛКИ ПОКАЗЫВАЮТСЯ, ТОЛЬКО КОГДА `showAll` ВЫКЛЮЧЕН 👇 */}
        {!showAll && (
          <div className={styles.navigationArrows}>
            <button
              className={styles.arrow}
              onClick={handlePrev}
              disabled={page === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              className={styles.arrow}
              onClick={handleNext}
              disabled={page >= maxPage}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      <div className={styles.productGrid}>
        {visibleProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              {product.discount && (
                <span className={`${styles.tag} ${styles.tagDiscount}`}>
                  -{product.discount}%
                </span>
              )}
              {product.isNew && (
                <span className={`${styles.tag} ${styles.tagNew}`}>NEW</span>
              )}
              <div className={styles.icons}>
                <button className={styles.iconBtn}>
                  <FaRegHeart />
                </button>
                <a href="/src/modules/Detailwatch">
                  <button className={styles.iconBtn}>
                    <FaRegEye />
                  </button>
                </a>
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={styles.productImage}
              />
              <button className={styles.addToCart}>Add To Cart</button>
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price}</span>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>${product.oldPrice}</span>
                )}
              </div>
              <StarRating rating={product.rating} reviews={product.Reviews} />
            </div>
          </div>
        ))}
      </div>
      {/* 👇 ЛОГИКА ДЛЯ КНОПКИ "VIEW ALL" / "SHOW LESS" 👇 */}
      {ourProducts.length > itemsPerPage && (
        <div className={styles.viewAllContainer}>
          {showAll ? (
            <button className={styles.viewAllButton} onClick={handleShowLess}>
              Show Less
            </button>
          ) : (
            <button
              className={styles.viewAllButton}
              onClick={() => setShowAll(true)}
            >
              View All Products
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FlashSales;
