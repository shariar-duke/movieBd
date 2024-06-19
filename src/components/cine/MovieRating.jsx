import React from "react";
import Star from "../../assets/star.svg";
export default function MovieRating({ rating }) {
   // how to make an array from an number 
   const ratingNumber = Array.from({length:rating}, ()=>0)
  return (
    <div className="flex items-center space-x-1 mb-5">
      {ratingNumber.map((r, index) => (
        <img  key={index} src={Star} alt="star" height="14" width="14" />
      ))}
    </div>
  );
}
