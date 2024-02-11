import React from "react";
import "./Card.css";
import { Link } from "react-scroll";


const Card = ({ emoji, heading, detail, color, lin }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{lin}</span>
    </div>
  );
};

export default Card;
