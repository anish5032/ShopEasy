import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [bestsellers, setBestsellers] = useState([]);
  const prods=products;

  useEffect(() => {
    const bestSellers = products.filter(product => product.bestseller);
    setBestsellers(bestSellers);
  }, []);

  return (
    <AppContext.Provider value={{ bestsellers,prods }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => useContext(AppContext);

export { AppProvider, useProductContext };
