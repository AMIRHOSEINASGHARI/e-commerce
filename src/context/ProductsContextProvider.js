import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

export const ProductsContext = createContext();
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
    };
    fetchData();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
