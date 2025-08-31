import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [prods, setProds] = useState(products);
  const [bestsellers, setBestsellers] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on first load
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const bestSellers = prods.filter((product) => product.bestseller);
    setBestsellers(bestSellers);
  }, [prods]);

  return (
    <AppContext.Provider
      value={{ prods, setProds, bestsellers, cartItems, setCartItems }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => useContext(AppContext);

export { AppProvider, useProductContext };
