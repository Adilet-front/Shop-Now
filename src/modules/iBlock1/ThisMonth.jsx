import { useEffect, useState, useRef } from "react";
import styles from "./ThisMonth.module.scss";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../store/features/favoritesSlice";

export const ThisMonth = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const listRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/products?_limit=90")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  const sortedProducts = [...products].sort(
    (a, b) => (b.Reviews || 0) - (a.Reviews || 0)
  );

  const maxPage = Math.ceil(sortedProducts.length / itemsPerPage) - 1;

  useEffect(() => {
    if (showAll && listRef.current) {
      listRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [showAll]);

  const handleNext = () => {
    if (page < maxPage) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const visibleProducts = showAll
    ? sortedProducts.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
    : sortedProducts.slice(0, 4);

  return (
    <div className={styles.ThisMonth}>
      <div className={styles.headerRow}>
        <div className={styles.monthLabel}>
          <span className={styles.redDot}></span>
          <span>This Month</span>
        </div>
        <button
          className={styles.viewAll}
          onClick={() => {
            setShowAll((prev) => !prev);
            setPage(0);
          }}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <h2 className={styles.title}>Best Selling Products</h2>
      <div className={styles.carouselWrapper}>
        {showAll && (
          <button
            className={styles.arrow}
            onClick={handlePrev}
            disabled={page === 0}
            aria-label="Previous"
          >
            &#8592;
          </button>
        )}
        <ul
          className={styles.list}
          ref={listRef}
          style={{
            transition: "transform 0.5s",
            transform: showAll
              ? `translateX(-${page * 100}%)`
              : "translateX(0)",
            width: showAll ? "100%" : "auto",
          }}
        >
          {visibleProducts.map((product) => (
            <li key={product.id} className={styles.item}>
              <div className={styles.icons}>
                <span
                  onClick={() => dispatch(addFavorites(product))}
                  className={styles.iconHeart}
                >
                  ♡
                </span>
                <span className={styles.iconEye}>👁</span>
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={styles.productImage}
              />
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price}</span>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>${product.oldPrice}</span>
                )}
              </div>
              <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.reviews}>({product.Reviews || 0})</span>
              </div>
            </li>
          ))}
        </ul>
        {showAll && (
          <button
            className={styles.arrow}
            onClick={handleNext}
            disabled={page === maxPage}
            aria-label="Next"
          >
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
};
