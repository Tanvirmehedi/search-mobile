import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Phone from "../Phone/Phone";
import "./Phones.css";

const Phones = () => {
  const d = "samsung";
  const [phones, setPhone] = useState([]);

  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${d}`).then(
      (res) => res.json().then((data) => setPhone(data.data))
    );
  }, []);

  // Click Handler
  const phoneDetails = (data) => {
    const newArr = [...addToCart, data];
    setAddToCart(newArr);
  };
  return (
    <div className="row">
      <div className="col-md-10">
        <div className="row g-2 ">
          {phones.length <= 0 ? (
            <h1>Data Load : {phones.length}</h1>
          ) : (
            phones.map((phone) => (
              <Phone
                phone={phone}
                key={phone.slug}
                phoneDetails={phoneDetails}
              ></Phone>
            ))
          )}
        </div>
      </div>
      <div className="col-md-2 border bg-dark rounded text-white py-2 px-1">
        <Cart addToCart={addToCart}></Cart>
      </div>
    </div>
  );
};

export default Phones;
