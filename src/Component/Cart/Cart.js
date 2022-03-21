import React from "react";
import "./Cart.css";

const Cart = ({ addToCart }) => {
  console.log(addToCart);
  return (
    <div>
      <span>Number Of Items: {addToCart.length} </span>
      {addToCart.map((img) => (
        <div className="bg-white border-2 rounded py-2 my-2">
          <img
            className="p-2 bg-white m-1 border-2 rounded"
            src={img.image}
            alt={img.brand}
            key={img.slug}
          />
          <button className="btn btn-danger">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
