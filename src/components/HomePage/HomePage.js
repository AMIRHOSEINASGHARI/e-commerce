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
    <div className="mx-5 min-h-screen">
      <div className="flex items-center justify-center">
        <h1 className="capitalize mt-10 font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-500 w-fit border-b pb-3">
          here is all {categories.length - 1} categories
        </h1>
      </div>
      <div className=" max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10 ">
        {categories.map((el, i) => (
          <button
            onClick={() => {
              if (el === "all") {
                setNewProducts(products);
              } else {
                setNewProducts(products.filter((item) => item.category === el));
              }
            }}
            className={`capitalize hover:-translate-y-1 py-3 px-4 rounded-full transition-all duration-200 ${
              el === "women's clothing" &&
              "col-start-1 col-end-3 lg:col-end-5 xl:col-auto"
            } ${
              el === "men's clothing"
                ? "text-emerald-600 bg-emerald-100 hover:bg-emerald-200"
                : el === "jewelery"
                ? "text-orange-600 bg-orange-100 hover:bg-orange-200"
                : el === "electronics"
                ? "text-yellow-600 bg-yellow-100 hover:bg-yellow-200"
                : el === "women's clothing"
                ? "text-purple-600 bg-purple-100 hover:bg-purple-200"
                : "text-blue-600 bg-blue-100 hover:bg-blue-200"
            }`}
            key={i}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="max-w-[1200px] my-5 mx-auto grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newProducts.length === 0
          ? products.map((el) => <CardElement {...el} key={el.id} />)
          : newProducts.map((el) => <CardElement {...el} key={el.id} />)}
      </div>
    </div>
  );
};

export default HomePage;
