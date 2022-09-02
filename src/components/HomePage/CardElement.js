import React from "react";
//functions
import { shortTitle } from "../../services/functions";
//react-router-dom
import { Link } from "react-router-dom";

const CardElement = (props) => {
  const { category, id, title, image, price } = props;
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <h5>{shortTitle(title)}</h5>
      <h6>{category}</h6>
      <div>
        <h6>${price}</h6>
      </div>
      <Link to={`/products/${id}`}>buy now</Link>
    </div>
  );
};

export default CardElement;
