import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.NotFound}>
      <div className={styles.breadcrumb}>
        <span className={styles.link} onClick={() => navigate("/home")}>
          Home
        </span>
        <span>
          <strong> / 404 Error</strong>
        </span>
      </div>

      <div className={styles.Not404}>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button onClick={() => navigate("/home")}>Back to home page</button>
      </div>
    </div>
  );
};
