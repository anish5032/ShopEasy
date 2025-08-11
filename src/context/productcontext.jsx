import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const [featured, setFeatured] = useState([]);

  const getProducts = async (url) => {
    try {
      const res = await fetch(url);
      const products =await res.json();
      
      
      

      const featuredData = products.filter((e) => e.featured === true);
      setFeatured(featuredData);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ featured }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
