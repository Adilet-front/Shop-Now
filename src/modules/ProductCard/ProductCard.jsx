import { useEffect, useState } from "react";

export const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products?_limit=90")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} – ${product.price}
          </li>
        ))}
      </ul>
    </div>


  );
};
