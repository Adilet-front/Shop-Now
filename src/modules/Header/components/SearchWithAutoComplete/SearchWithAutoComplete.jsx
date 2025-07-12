import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ добавлено
import styles from "./YourComponent.module.scss";
import { t } from "i18next";

export default function SearchWithAutoComplete() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate(); // ⬅️ навигация

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Товары с сервера:", data);
        setProducts(data);
      });
  }, []);

  const handleSearch = () => {
    const foundProduct = products.find(
      (product) =>
        product.name?.toLowerCase() === query.trim().toLowerCase()
    );

    if (foundProduct) {
      navigate(`/product/${foundProduct.id}`); // ⬅️ переход на страницу товара
    } else {
      alert("Товар не найден");
    }

    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() !== "") {
      const filtered = products.filter((product) =>
        product.name?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    setShowSuggestions(false);
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.InInputWrapper} style={{ position: "relative" }}>
        <input
          type="text"
          placeholder={t("start_block.lookFor")}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          <img
            className={styles.searchSvg}
            src="/images/Search.svg"
            alt="Search"
          />
        </button>

        {/* Автодополнение */}
        {showSuggestions && (
          <ul className={styles.suggestionList}>
            {filteredUsers.length === 0 ? (
              <li className={styles.noResult}>Ничего не найдено</li>
            ) : (
              filteredUsers.map((user) => (
                <li
                  key={user.id}
                  onClick={() => handleSuggestionClick(user.name)}
                  className={styles.suggestionItem}
                >
                  {user.name}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
