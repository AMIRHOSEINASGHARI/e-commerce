import React, { useContext } from "react";
//functions
import { quantityCount, shortTitle } from "../../services/functions";
//react-router-dom
import { Link } from "react-router-dom";
//contexts
import { CartContext } from "../../context/CartContextProvider";
//components
import { IoCloseOutline } from "react-icons/io5";

const CardElement = (props) => {
  const { category, id, title, image, price } = props;
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      <div className="flex py-10 mb-3 items-center justify-center rounded-xl bg-gray-100">
        <img className="w-52 h-52 mb-3" src={image} alt={title} />
      </div>
      <h5 className="mb-2 text-lg text-slate-500">{shortTitle(title)}</h5>
      <h6
        className={`${
          category === "men's clothing"
            ? "text-emerald-600 bg-emerald-100"
            : category === "jewelery"
            ? "text-orange-600 bg-orange-100"
            : category === "electronics"
            ? "text-yellow-600 bg-yellow-100"
            : category === "women's clothing"
            ? "text-purple-600 bg-purple-100"
            : ""
        } capitalize rounded-full py-1.5 px-4 mb-2 inline-block`}
      >
        {category}
      </h6>
      <div className="flex items-center mb-7">
        <h6 className="font-light bg-blue-100 w-fit text-blue-600 rounded-full px-3 py-1">
          ${price}
        </h6>
        <h6
          className={`${
            quantityCount(state, id) >= 1 &&
            "bg-orange-100 text-orange-600 rounded-full py-1 px-3 mx-5"
          }`}
        >
          {quantityCount(state, id) >= 1 && quantityCount(state, id)}
        </h6>
        {quantityCount(state, id) >= 1 && (
          <button
            onClick={() => dispatch({ type: "remove", payload: props })}
            className="text-red-600 hover:bg-red-200 hover:text-red-700 transition-all duration-200 text-2xl bg-red-100 rounded-full p-1"
          >
            <IoCloseOutline />
          </button>
        )}
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
      <Link
        className={`border ${
          quantityCount(state, id) >= 1
            ? "border-red-300 text-red-400 hover:bg-red-50"
            : "border-blue-300 text-blue-400 hover:bg-blue-50"
        } py-1.5 rounded-md capitalize font-light flex items-center justify-center transition-all duration-200`}
        to={`/products/${id}`}
      >
        {quantityCount(state, id) >= 1 ? "buy more" : "buy now"}
      </Link>
    </div>
  );
};

export default CardElement;
