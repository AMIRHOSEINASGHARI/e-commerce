import React, { useContext } from "react";
//functions
import { shortTitle } from "../../services/functions";
//components
import {
  IoCaretDownOutline,
  IoCaretUpOutline,
  IoCloseOutline,
} from "react-icons/io5";
//contexts
import { CartContext } from "../../context/CartContextProvider";

const CartProduct = (props) => {
  const { category, title, image, price, quantity } = props;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="max-w-[1200px] m-5 flex items-center justify-between bg-slate-100 rounded-lg p-4 sm:p-6">
      <div className="flex items-center">
        <img
          className="w-16 h-16 mr-5 md:w-32 md:h-32 md:mr-10"
          src={image}
          alt={title}
        />
        <div className="text-xs sm:text-sm md:text-lg lg:text-xl">
          <h4>{shortTitle(title)}</h4>
          <h6 className="capitalize my-1">{category}</h6>
          <h6 className="capitalize">
            unit price:{" "}
            <span className="font-bold w-fit text-blue-400 rounded-lg">
              ${price}
            </span>
          </h6>
        </div>
      </div>
      <h6 className="text-2xl capitalize hidden xl:block">
        total price:{" "}
        <span className="w-fit text-blue-400 rounded-lg">
          ${quantity * price}
        </span>
      </h6>
      <div>
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-1 sm:mr-5 p-2 border border-blue-300 rounded-full lg:text-xl">
            <button
              onClick={() => dispatch({ type: "increase", payload: props })}
              className=" text-blue-500"
            >
              <IoCaretUpOutline />
            </button>
            <span className="my-2 text-blue-500">{quantity}</span>
            <button
              onClick={() =>
                dispatch({
                  type: `${quantity <= 1 ? "remove" : "decrease"}`,
                  payload: props,
                })
              }
              className={` ${
                quantity === 1 ? "text-orange-400" : "text-blue-500"
              }`}
            >
              <IoCaretDownOutline />
            </button>
          </div>
          <button
            className="text-red-600 hover:bg-red-200 hover:text-red-700 transition-all duration-200 bg-red-100 rounded-full p-1 lg:text-2xl"
            onClick={() => dispatch({ type: "remove", payload: props })}
          >
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
