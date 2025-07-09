export const fetchProducts = async () => {
  const res = await fetch("http://localhost:3001/products");
  return await res.json();
};

