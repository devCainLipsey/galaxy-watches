import React from "react";
import { AiFillStar } from "react-icons/ai"; // Import star icon from React Icons

const WatchCard: React.FC<{
  imageSrc: string;
  name: string;
  price: number;
  rating: number;
}> = ({ imageSrc, name, price, rating }) => {
  return (
    <>
      <div className="bg-black shadow-md rounded-lg p-6 w-80">
        <img
          src={imageSrc}
          alt="Product"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 mb-2">${price}</p>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <AiFillStar
              key={index}
              className={`w-5 h-5 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              } mr-1`}
            />
          ))}
        </div>
        <div className=" w-64  relative inline-flex group mt-12">
          <div className="ml-3.5 absolute transition-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button className=" w-64 ml-3.5 relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default WatchCard;
