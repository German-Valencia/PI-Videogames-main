import React from "react";

function Card({ name, img, genre }) {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{genre}</h5>
      <img src={img} alt="img not found" width="256px" height="144px" />
    </div>
  );
}

export default Card;
