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
      "\"I've been using my Galaxy Watch for a week now, and I'm blown away by its features! From tracking my workouts to receiving notifications seamlessly, this watch has become an essential part of my daily routine. Plus, the sleek design earns me compliments everywhere I go. Highly recommend!\"",
    rating: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    header: "Great Service",
    author: "Benjamin Martinez",
    content:
      "\"As a tech enthusiast, I've tried numerous smartwatches, but Galaxy Watches truly stands out. The intuitive interface and smooth performance make it a joy to use. The battery life exceeds my expectations, lasting through even my busiest days. If you're looking for a reliable and stylish smartwatch, look no further!\"",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    header: "Highly Recommended",
    author: "Will Davis",
    content:
      '"I was hesitant to switch to a smartwatch, but Galaxy Watches has completely changed my mind. Not only does it keep me organized with its calendar and reminder features, but the health tracking capabilities have motivated me to stay active throughout the day. Plus, the customizable watch faces allow me to express my style effortlessly. 5/5 would recommend!"',
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
    <>
      <div className="w-9/12 max-w-screen-lg ml-64 -mr-96">
        <div className="relative">
          <div className="flex transition-transform duration-300 ease-in-out overflow-x-hidden rounded-xl">
            <div className="ml-3.5 absolute transition-all opacity-100 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-xl blur-xl  animate-tilt"></div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-20 transform -translate-y-1/2 focus:outline-none z-10"
            >
              <FaArrowCircleLeft
                className="text-[#cf0cbc] hover:scale-150 duration-200 "
                size={50}
              />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-20 transform -translate-y-1/2 focus:outline-none z-10"
            >
              <FaArrowCircleRight
                className="text-[#cf0cbc]  hover:scale-150 duration-200 "
                size={50}
              />
            </button>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="w-full "
                style={{ display: index === currentIndex ? "block" : "none" }}
              >
                <div className="relative rounded-xl shadow-lg overflow-hidden w-full h-[26rem]">
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

                    <p className="text-black text-md ml-5">{review.author}</p>
                    <img
                      src={review.imageUrl}
                      alt={review.header}
                      className="w-52 h-auto mt-5 rounded-xl"
                    />
                    <p className="text-gray-700 mt-5">{review.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
