import React, { useContext } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//assets
import shopping from "../../assets/shopping.svg";
//contexts
import { CartContext } from "../../context/CartContextProvider";

const EmptyCart = () => {
  const { state } = useContext(CartContext);
  return (
    <div className="flex flex-col items-center justify-center my-24 px-10">
      <img className="lg:w-2/3" src={shopping} alt="Your Cart Is Empty" />
      <h1 className="text-3xl capitalize text-center text-purple-700 font-bold my-10">
        {state.checkOut
          ? "checked out successfully!"
          : "your shopping cart is empty"}
      </h1>
      <Link
        className="bg-purple-700 text-white font-bold capitalize rounded-sm py-2 px-10 hover:bg-purple-800 transition-all duration-200"
        to={`/`}
      >
        {state.checkOut ? "buy more" : "back to shop"}
      </Link>
    </div>
  );
};

export default EmptyCart;
