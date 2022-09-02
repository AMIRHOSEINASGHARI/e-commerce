import React, { useContext } from "react";
//contexts
import { ProductsContext } from "../../context/ProductsContextProvider";
//components
import CardElement from "./CardElement";

const HomePage = () => {
  const products = useContext(ProductsContext);
  return (
    <div>
      {products.map((el) => (
        <CardElement {...el} key={el.id} />
      ))}
    </div>
  );
};

export default HomePage;
