"use client";

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const DetailsDescription: React.FC<{
  heading: string;
  price: number;
  starRating: number;
  description: string;
}> = ({ heading, price, starRating, description }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full bg-black p-5 shadow-md mb-10 rounded-b-3xl">
      <h2 className="text-xl text-white font-semibold mb-2">{heading}</h2>
      <div className="flex items-center mb-2">
        <span className="text-lg text-green-500 font-bold">
          ${price.toFixed(2)}
        </span>
        <div className="flex ml-2">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`text-yellow-500 ${
                index < Math.round(starRating) ? "fill-current" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-white mb-4">{description}</p>
      <div className="flex items-center">
        <button
          onClick={decrementQuantity}
          className="text-gray-700 bg-gray-200 px-2 py-1 rounded-l-md"
        >
          -
        </button>
        <span className="text-white px-4">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="text-black bg-white px-2 py-1 rounded-r-md"
        >
          +
        </button>
        <button className="ml-auto bg-[#8554c7] text-white py-2 px-4 rounded-3xl hover:bg-[#cf0cbc]  focus:outline-none focus:ring focus:border-[#cf0cbc]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsDescription;
