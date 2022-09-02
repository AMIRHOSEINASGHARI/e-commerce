import React, { useContext } from "react";
//contexts
import { CartContext } from "../../context/CartContextProvider";
//react-router-dom
import { Link } from "react-router-dom";
//components
import EmptyCart from "./EmptyCart";
import CartProduct from "./CartProduct";
import { IoIosArrowRoundBack } from "react-icons/io";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      {state.totalItems === 0 ? (
        <EmptyCart />
      ) : (
        <div className="mb-20">
          <div className="flex items-center justify-between capitalize m-5 pb-3 border-b border-gray-300">
            <h1 className="text-lg font-extralight">your shopping cart</h1>
            <h1 className="font-bold">{state.totalItems} items</h1>
          </div>
          <div>
            {state.selectedItems.map((el) => (
              <CartProduct key={el.id} {...el} />
            ))}
          </div>
          <div className="flex items-center justify-between m-5">
            <Link to={`/`} className="flex items-center text-blue-500">
              <IoIosArrowRoundBack className="text-3xl mr-2" />{" "}
              <span className="capitalize font-light">buy more</span>
            </Link>
            <h1 className="capitalize text-slate-400 font-light text-sm">
              sub-total :{" "}
              <span className="font-bold text-blue-500">
                ${state.totalPrice}
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-end m-5">
            <button
              onClick={() => dispatch({ type: "checkOut" })}
              className="bg-blue-400 text-white font-bold capitalize rounded-sm py-2 px-10 hover:bg-blue-500 transition-all duration-200"
            >
              checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
