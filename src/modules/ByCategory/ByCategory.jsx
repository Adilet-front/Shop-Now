import React, { useState, useEffect } from "react";
import styles from "./ByCategory.module.scss";

// Make sure these paths are correct relative to your public folder
// For example, if your images are in `public/images/`, then the path should be `/images/your-image.svg`
const categories = [
  { name: "Phones", icon: "/images/Cell Phone Category (1).svg" }, // Assuming images are directly in public/images
  { name: "Computers", icon: "/images/Computer Category.svg" },
  { name: "SmartWatch", icon: "/images/Smart Watch Icon.svg" },
  { name: "Camera", icon: "/images/Camera Icon.svg" },
  { name: "HeadPhones", icon: "/images/Headphone Icon.svg" },
  { name: "Gaming", icon: "/images/Gamepad Icon.svg" },
  { name: "Books", icon: "/public/images/photo_5359496385541563353_y.jpg" },
  { name: "Music", icon: "/public/images/f2e82fea335c9abc62963ad46d4368a4.jpg" },
  { name: "Fashion", icon: "/public/images/images (4).jfif" },
  { name: "Appliances", icon: "/public/images/images (5).jfif" },
  { name: "Software", icon: "/public/images/images (6).jfif" },
  { name: "Drones", icon: "/public/images/b5fcfdd8d5ca6ff4484187b2ba40363d.jpg" },
];

export const ByCategory = () => {
  const categoriesPerPage = 6;
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 10);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    }, 10);
  };

  const startIndex = currentPage * categoriesPerPage;
  const displayedCategories = categories.slice(
    startIndex,
    startIndex + categoriesPerPage
  );

  return (
    <div className={styles.ByCategory}>
      <div className={styles.categoryHeader}>
        <div className={styles.redblock}></div>
        <div className={styles.category}>
          <p>Categories</p>
        </div>
      </div>

      <div className={styles.browse}>
        <div className={styles.browsep}>
          <p>Browse By Category</p>
        </div>
        <div className={styles.leftright}>
          <div className={styles.left} onClick={handlePrev}>
            &lt;
          </div>
          <div className={styles.right} onClick={handleNext}>
            &gt;
          </div>
        </div>
      </div>

      <div
        className={`${styles.cards} ${isAnimating ? styles.fade : ""}`}
        onTransitionEnd={() => setIsAnimating(false)}
      >
        {displayedCategories.map((cat) => (
          <div
            key={cat.name}
            className={`${styles.card} ${
              cat.name === "Camera" ? styles.active : ""
            }`}
          >
            {/* The image is already correctly rendered here using cat.icon */}
            <img src={cat.icon} alt={cat.name} className={styles.icon} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
