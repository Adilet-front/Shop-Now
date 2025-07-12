import styles from "./ByCategory.module.scss";

// You'd likely have an array of categories
const categories = [
  { name: "Phones", icon: "/public/images/Cell Phone Category (1).svg" },
  { name: "Computers", icon: "/public/images/Computer Category.svg" },
  { name: "SmartWatch", icon: "/public/images/Smart Watch Icon.svg" },
  { name: "Camera", icon: "/public/images/Camera Icon.svg" }, // This one should be active
  { name: "HeadPhones", icon: "/public/images/Headphone Icon.svg" },
  { name: "Gaming", icon: "/public/images/Gamepad Icon.svg" },
];

export const ByCategory = () => {
  return (
    <div className={styles.ByCategory}>
      {/* New wrapper div for the red block and category text */}
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
          {/* Replace with your actual arrow SVGs or icon components */}
          <div className={styles.left}>&lt;</div>
          <div className={styles.right}>&gt;</div>
        </div>
      </div>
      <div className={styles.cards}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`${styles.card} ${cat.name === "Camera" ? styles.active : ""}`}
          >
            {/* Replace with your actual icon component or img tag */}
            <img src={cat.icon} alt={cat.name} className={styles.icon} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};