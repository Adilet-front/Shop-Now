import { useEffect, useState } from "react";

export const ProductCard = () => {
  const [ setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products?_limit=90")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  return (
    <div>

      
    </div>


  );
};
