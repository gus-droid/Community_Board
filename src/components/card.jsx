import React from "react";
import Button from "./Button";

const Card = ({ image, name, votes, link }) => {
  return (
    <div className="Card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <h4>Votes: {votes}</h4>
      <Button link={link} />
    </div>
  );
};

export default Card;

