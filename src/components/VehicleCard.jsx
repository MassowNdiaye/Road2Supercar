import React from "react";
import "./VehicleCard.css";
import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  if (!vehicle) return null;

  const { name, brand, model, year, price, miliage, description, main_image } =
    vehicle;

  const formatPrice = (priceString) => {
    const numericPrice = parseFloat(priceString.replace(".", ""));
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(numericPrice);
  };

  return (
    <div className="vehicle-card">
      <img
        src={`../media/vehicles/${main_image}`}
        alt={name}
        className="vehicle-image"
      />
      <div className="vehicle-info">
        <h3>{name}</h3>
        <p>price: {formatPrice(price)}</p>
        <p>miles: {miliage.toLocaleString()}</p>
        {/* <p>{brand}</p> */}
        <p>{description}</p>
      </div>
      {/* <button>View Details</button> */}
    </div>
  );
};

export default VehicleCard;
