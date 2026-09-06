import React from "react";

const StarRating = ({ rating }) => {
  const starIds = [1, 2, 3, 4, 5];

  return (
    <div className="flex drop-shadow-lg shadow-black">
      {starIds.map((id) => (
        <svg
          key={id}
          className={`w-7 sm:w-10 lg:w-12 text-yellow-400 ${
            rating >= id
              ? "fill-current"
              : "fill-transparent stroke-current stroke-2"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
