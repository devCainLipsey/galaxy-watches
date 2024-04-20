"use client";

import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlice";
import { AiFillStar } from "react-icons/ai"; // Import star icon from React Icons
import { FaLongArrowAltRight } from "react-icons/fa";

const WatchCard: React.FC<{
  id: number;
  imageSrc: string;
  name: string;
  price: number;
  starRating: number;
}> = ({ id, imageSrc, name, price, starRating }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id,
        name,
        price,
        imageUrl: imageSrc,
        quantity: 1,
      })
    );
  };

  return (
    <>
      {/*<Link href={`/Details?id=${id}`} className="hover:scale-110 duration-300"> */}
      <div className="bg-black shadow-md rounded-3xl p-6 w-96">
        <img
          src={imageSrc}
          alt="Product"
          className="w-full h-64 object-cover rounded-3xl mb-4"
        />
        <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
        <p className="text-green-500 text-lg font-bold mb-2">${price}</p>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <AiFillStar
              key={index}
              className={`w-5 h-5 ${
                index < starRating ? "text-yellow-500" : "text-gray-300"
              } mr-1`}
            />
          ))}
        </div>
        <div className=" w-80  relative inline-flex group mt-12">
          <div className="ml-3.5 absolute transition-all duration-100 opacity-30 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            className=" w-80 ml-3.5 relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-100 bg-gray-900 font-pj rounded-3xl focus:outline-none  focus:ring-2 focus:ring-offset-0 focus:ring-[#cf0cbc]"
            onClick={handleAddToCart}
          >
            <span className="ml-5 group-hover:translate-x-[-1rem] transition-all duration-200 text-center">
              Add to Cart
            </span>
            <FaLongArrowAltRight
              className="-ml-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              size={20}
            />
          </button>
        </div>
      </div>
      {/*</Link> */}
    </>
  );
};

export default WatchCard;
