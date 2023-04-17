import React from "react";
import { useState } from "react";

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";


const StarRating = ({rating}) => {
    const starIds = [1, 2, 3, 4, 5];
  
    const getImg = (id) => {
      return  rating >= id ? FULL_STAR : EMPTY_STAR;
    };
  
    return (
      <div
        className="flex drop-shadow-lg shadow-black"
      >
        {starIds.map((id) => (
          <img
            key={id}
            src={getImg(id)}
            className="w-7 sm:w-10 lg:w-12"
          />
        ))}
      </div>
    );
  };

  export default StarRating;