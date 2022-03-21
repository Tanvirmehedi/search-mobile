import React from "react";

const Phone = ({ phone, phoneDetails }) => {
  const { brand, phone_name, slug, image } = phone;

  return (
    <div className="col col-md-4 gx-5 ">
      <div className="row bg-light p-3 border rounded ">
        <div className="col-5 col-sm-12">
          <img src={image} alt={phone_name} />
        </div>
        <div className="col-5 col-sm-12 pt-2">
          <h3>Name: {phone_name}</h3>
          <h5>Brand : {brand}</h5>
          <button
            onClick={() => {
              phoneDetails(phone);
            }}
            className="btn btn-info text-white fw-bold"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
