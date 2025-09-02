import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { products } from "../assets/assets";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [prods, setProds] = useState(products);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Cart helper functions
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        // increase quantity
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // add new product
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // auto-remove if quantity goes to 0
      return removeFromCart(id);
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const bestsellers = useMemo(
    () => prods.filter((product) => product.bestseller),
    [prods]
  );

  const value = useMemo(
    () => ({
      prods,
      setProds,
      bestsellers,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [prods, bestsellers, cartItems]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useProductContext = () => useContext(AppContext);

export { AppProvider, useProductContext };
