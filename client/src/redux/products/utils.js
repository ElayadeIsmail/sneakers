export const addItem = (cartItems, itemToAdd) => {
  const existingPtoduct = cartItems.find(
    (product) => product._id === itemToAdd._id
  );
  if (existingPtoduct) {
    cartItems.map((cartItem) =>
      cartItem._id === itemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity++ }
        : cartItem
    );
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return [...cartItems];
  }
  localStorage.setItem(
    "cartItems",
    JSON.stringify([...cartItems, { ...itemToAdd, quantity: 1 }])
  );
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const shortProduct = (cartItems, id) => {
  const product = cartItems.find((cartItem) => cartItem._id === id);
  if (product.quantity > 1) {
    cartItems.map((cartItem) =>
      cartItem._id === id
        ? { ...cartItem, quantity: cartItem.quantity-- }
        : cartItem
    );
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return [...cartItems];
  }

  cartItems = cartItems.filter((item) => item._id !== id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};

export const removeItem = (cartItems, id) => {
  cartItems = cartItems.filter((item) => item._id !== id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return cartItems;
};
