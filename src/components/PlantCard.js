import React, { useState } from "react";

function PlantCard({ plant }) {
  //#3:
  const [inStock, setInStock] = useState(true)

  //#1:
  const { name, image, price} = plant

  //#3:
function toggleStock() {
  setInStock(inStock => !inStock)
}
  // console.log(plant)
    
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" /* #3: */onClick={toggleStock}>In Stock</button>
      ) : (
        <button /* #3: */onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
