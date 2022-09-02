import React, { useContext, useState } from "react";
//contexts
import { ProductsContext } from "../../context/ProductsContextProvider";
//components
import CardElement from "./CardElement";
import Loader from "../Loader";

const HomePage = () => {
  const products = useContext(ProductsContext);
  const [newProducts, setNewProducts] = useState([]);
  const categories = ["all", ...new Set(products.map((el) => el.category))];
  if (products.length === 0) return <Loader />;
  return (
    <div>
      <div>
        <h1>here is all {categories.length - 1} categories</h1>
      </div>
      <div>
        {categories.map((el, i) => (
          <button
            onClick={() => {
              if (el === "all") {
                setNewProducts(products);
              } else {
                setNewProducts(products.filter((item) => item.category === el));
              }
            }}
            key={i}
          >
            {el}
          </button>
        ))}
      </div>
      <div>
        {newProducts.length === 0
          ? products.map((el) => <CardElement {...el} key={el.id} />)
          : newProducts.map((el) => <CardElement {...el} key={el.id} />)}
      </div>
    </div>
  );
};

export default HomePage;
