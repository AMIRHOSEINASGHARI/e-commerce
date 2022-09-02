import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
//react-router-dom
import { useParams, Link } from "react-router-dom";
//components
import Loader from "../Loader";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoCaretBackOutline } from "react-icons/io5";
import CardElement from "../HomePage/CardElement";
//functions
import { shortTitle } from "../../services/functions";
//contexts
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductDetails = () => {
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
  }, []);
  if (Object.keys(product).length === 0) return <Loader />;
  return (
    <div>
      <div>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <h6>${price}</h6>
          <h6>{category}</h6>
          <h5>{shortTitle(title)}</h5>
          <p>{description}</p>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <button>buy now</button>
          <Link to={`/`}>
            <IoCaretBackOutline />
            <span>back to shop</span>
          </Link>
        </div>
      </div>
      <div>
        <h1>
          more <span>{category}</span> products
        </h1>
      </div>
      {filteredProducts.length === 0 ? (
        <Loader />
      ) : (
        <div>
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
