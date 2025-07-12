// src/api.js (or wherever you keep your fetch functions)
export const fetchProducts = async () => {
  const res = await fetch("http://localhost:3001/products");
  return await res.json();
};

export const fetchCartItems = async () => {
  const res = await fetch("http://localhost:3001/cart");
  return await res.json();
};

export const addToCartAPI = async (product) => {
  // Проверяем, есть ли уже товар в корзине
  const existingCartItems = await fetchCartItems();
  const existingItem = existingCartItems.find(
    (item) => item.productId === product.id
  );

  if (existingItem) {
    // Если товар уже есть, обновляем количество
    const updatedQuantity = existingItem.quantity + 1;
    const res = await fetch(`http://localhost:3001/cart/${existingItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...existingItem, quantity: updatedQuantity }),
    });
    return await res.json();
  } else {
    // Если товара нет, добавляем его в корзину
    const res = await fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product.id, // Ссылка на продукт
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      }),
    });
    return await res.json();
  }
};

export const updateCartItemQuantity = async (itemId, newQuantity) => {
  const res = await fetch(`http://localhost:3001/cart/${itemId}`, {
    method: "PATCH", // PATCH для частичного обновления (только количества)
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity: newQuantity }),
  });
  return await res.json();
};

export const removeFromCartAPI = async (itemId) => {
  const res = await fetch(`http://localhost:3001/cart/${itemId}`, {
    method: "DELETE",
  });
  return res.ok; // Возвращаем true, если удаление прошло успешно
};
