import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
//react-router-dom
import { useParams, Link } from "react-router-dom";
//components
import Loader from "../Loader";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoCloseOutline,
} from "react-icons/io5";
import CardElement from "../HomePage/CardElement";
//functions
import { isInCart, quantityCount, shortTitle } from "../../services/functions";
//contexts
import { ProductsContext } from "../../context/ProductsContextProvider";
import { CartContext } from "../../context/CartContextProvider";

const ProductDetails = () => {
  const { state, dispatch } = useContext(CartContext);
  const params = useParams();
  const [product, setProduct] = useState([]);
  const { category, description, id, title, image, price } = product;
  const products = useContext(ProductsContext);
  const filteredProducts = products
    .filter((el) => el.category === category)
    .filter((el) => el.id !== id);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => setProduct(response.data));
  }, [params.id]);
  if (Object.keys(product).length === 0) return <Loader />;
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-center mt-16">
        <div className="flex py-10 mb-3 lg:mr-8 items-center justify-center">
          <img
            className="w-60 h-60 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-cover mb-3"
            src={image}
            alt={title}
          />
        </div>
        <div className="mx-10">
          <h6 className="font-light w-fit text-blue-800 bg-blue-50 rounded-lg px-3 py-1 mb-2">
            ${price}
          </h6>
          <h6 className="font-light capitalize">{category}</h6>
          <h5 className="mb-4 font-extrabold text-xl text-slate-500">
            {shortTitle(title)}
          </h5>
          <p className="font-light lg:w-[350px] xl:w-[450px]">{description}</p>
          <div className="flex mt-3 mb-6">
            <AiFillStar className="fill-amber-400" />
            <AiFillStar className="fill-amber-400" />
            <AiFillStar className="fill-amber-400" />
            <AiFillStar className="fill-amber-400" />
            <AiOutlineStar className="fill-amber-400" />
          </div>
          {!isInCart(state, id) && (
            <button
              onClick={() => dispatch({ type: "add", payload: product })}
              className="uppercase font-extrabold bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 rounded-full py-3 px-10 mb-5"
            >
              buy now
            </button>
          )}
          {isInCart(state, id) && (
            <div className="flex items-center mb-5">
              <div className="border border-blue-300 flex items-center justify-center rounded-full w-[150px] overflow-hidden mr-5">
                <button
                  onClick={() =>
                    dispatch({
                      type: `${
                        quantityCount(state, id) <= 1 ? "remove" : "decrease"
                      }`,
                      payload: product,
                    })
                  }
                  className={`p-3 text-xl ${
                    quantityCount(state, id) === 1
                      ? "text-orange-400"
                      : "text-blue-500"
                  }`}
                >
                  <IoCaretBackOutline />
                </button>
                <span className="p-3 text-xl flex items-center justify-center w-[40px] text-blue-500">
                  {quantityCount(state, id)}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: "increase", payload: product })
                  }
                  className="p-3 text-xl text-blue-500"
                >
                  <IoCaretForwardOutline />
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: "remove", payload: product })}
                className="text-red-600 hover:bg-red-200 hover:text-red-700 transition-all duration-200 text-4xl bg-red-100 rounded-full p-1"
              >
                <IoCloseOutline />
              </button>
            </div>
          )}
          <Link
            className="flex items-center w-fit justify-center border rounded-md border-gray-200 text-gray-500 capitalize px-5 py-3"
            to={`/`}
          >
            <IoCaretBackOutline className="mr-2 -ml-2 text-2xl" />
            <span className="font-bold">back to shop</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="capitalize text-center mt-14 mb-10 w-fit mx-10 py-3 text-3xl border-b font-extralight">
          more{" "}
          <span
            className={`${
              category === "men's clothing"
                ? "text-emerald-500"
                : category === "jewelery"
                ? "text-orange-500"
                : category === "electronics"
                ? "text-yellow-500"
                : category === "women's clothing"
                ? "text-purple-500"
                : ""
            }  capitalize font-bold`}
          >
            {category}
          </span>{" "}
          products
        </h1>
      </div>
      {filteredProducts.length === 0 ? (
        <Loader />
      ) : (
        <div
          className={`max-w-[1200px] m-5 px-5 mx-auto grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:${
            filteredProducts.length === 3 ? "grid-cols-3" : "grid-cols-4"
          }`}
        >
          {filteredProducts.map((el) => (
            <CardElement
              key={el.id}
              id={el.id}
              category={el.category}
              title={el.title}
              price={el.price}
              image={el.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
