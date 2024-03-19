"use client";

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Review {
  id: number;
  header: string;
  author: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const reviews: Review[] = [
  {
    id: 1,
    header: "Amazing Product",
    author: "Emily Johnson",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum risus ac velit ultricies.",
    rating: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    header: "Great Service",
    author: "Benjamin Martinez",
    content:
      "Nulla facilisi. Sed auctor eleifend orci, et dictum libero accumsan vel. Suspendisse potenti.",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    header: "Highly Recommended",
    author: "Will Davis",
    content:
      "Praesent auctor nisi nec lacus iaculis, nec fringilla odio pharetra. Donec vitae arcu eget odio tempus tristique.",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1620000617482-821324eb9a14?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-9/12 max-w-screen-lg mx-auto ">
      <div className="relative w-full">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-20 transform -translate-y-1/2 focus:outline-none z-10"
        >
          <FaArrowCircleLeft className="text-[#cf0cbc]" size={50} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-20 transform -translate-y-1/2 focus:outline-none z-10"
        >
          <FaArrowCircleRight className="text-[#cf0cbc]" size={50} />
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0">
                <div className="relative rounded-lg shadow-lg overflow-hidden  w-full h-96">
                  {/* Adjusted height to be twice as tall */}
                  <div className="p-4 bg-white h-full">
                    <h3 className="text-lg font-semibold text-center mb-2">
                      {review.header}
                    </h3>
                    <div className="flex justify-center items-center">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, index) => (
                          <AiFillStar
                            key={index}
                            className="h-6 w-6 text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-black text-sm">{review.author}</p>
                    <img
                      src={review.imageUrl}
                      alt={review.header}
                      className="  w-48 h-auto mt-5 rounded-xl"
                    />
                    <p className="text-gray-700 mt-10">{review.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
