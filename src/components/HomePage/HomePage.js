import React, { useContext, useState } from "react";
//contexts
import { ProductsContext } from "../../context/ProductsContextProvider";
//components
import CardElement from "./CardElement";

const HomePage = () => {
  const products = useContext(ProductsContext);
  const [newProducts, setNewProducts] = useState([]);
  const categories = ["all", ...new Set(products.map((el) => el.category))];
  return (
    <div>
      <div>
        <h1>here is all {categories.length - 1} categories</h1>
      </div>
      <div>
        {categories.map((el, i) => (
          <button key={i}>{el}</button>
        ))}
      </div>
      <div>
        {products.map((el) => (
          <CardElement {...el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
