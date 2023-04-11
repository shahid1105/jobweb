import React from "react";
import "./JobCard.css";

const JobCard = ({ data }) => {
  const { picture, quantity, title } = data;
  return (
    <div className="category-div">
      <img className="category-img" src={picture} alt="" />
      <h1 className="category-title">{title}</h1>
      <p className="quantity">{quantity}</p>
    </div>
  );
};

export default JobCard;
