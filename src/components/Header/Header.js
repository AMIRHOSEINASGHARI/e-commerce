import React, { useContext } from "react";
//react-router-dom
import { Link } from "react-router-dom";
//assets
import logo from "../../assets/logo.svg";
//contexts
import { CartContext } from "../../context/CartContextProvider";

const Header = () => {
  const { state } = useContext(CartContext);
  return (
    <div
      className={`flex items-center justify-between sticky top-0 max-w-[1200px] mx-auto py-5 px-10 bg-slate-100 xxl:rounded-xl backdrop-blur-lg`}
    >
      <Link to={`/`}>
        Online <span className="text-lime-500">Shop</span>
      </Link>
      <Link className="relative" to={`/cart`}>
        <img className="w-10" src={logo} alt="Online Shop" />
        {state.totalItems >= 1 && (
          <span className="absolute -top-1 -left-4 bg-sky-400 text-blue-50 rounded-full w-6 h-6 flex items-center justify-center">
            {state.totalItems}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Header;
