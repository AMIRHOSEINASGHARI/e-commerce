import React from "react";

const CardElement = (props) => {
  const { category, id, title, image, price } = props;
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <h5>{title}</h5>
      <h6>{category}</h6>
      <div>
        <h6>${price}</h6>
      </div>
      <a href="#">buy now</a>
    </div>
  );
};

export default CardElement;
