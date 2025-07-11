import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ResultPage.module.scss";

import { useDispatch } from "react-redux";
import { addFavorites } from "../../store/features/favoritesSlice";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegHeart,
  FaRegEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
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

export const ResultPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams(); // получаем ID из URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Ошибка загрузки товара:", err));
  }, [id]);

  if (!product) {
    return <div className={styles.ResultPage}>Загрузка...</div>;
  }

  return (
    <div className={styles.ResultPage}>
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
            <button
              onClick={() => dispatch(addFavorites(product))}
              className={styles.iconBtn}
            >
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
    </div>
  );
};
