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
    header: "Amazing Product!",
    author: "Emily Johnson",
    content:
      "\"I've been using my Galaxy Watch for a week now, and I'm blown away by its features! From tracking my workouts to receiving notifications seamlessly, this watch has become an essential part of my daily routine.\"",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    header: "Great Service",
    author: "Benjamin Martinez",
    content:
      '"As a tech enthusiast, I\'ve tried numerous smartwatches, but Galaxy Watches truly stands out. The intuitive interface and smooth performance make it a joy to use."',
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    header: "Highly Recommended",
    author: "Will Davis",
    content:
      '"I was hesitant to switch to a smartwatch, but Galaxy Watches has completely changed my mind. Plus, the customizable watch faces allow me to express my style effortlessly. 5/5 would recommend!"',
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="w-9/12 max-w-screen-lg ml-64 -mr-96 max-[1750px]:ml-40  max-[1470px]:ml-10   ">
        <div className="relative">
          <div className="flex transition-transform duration-300 ease-in-out overflow-x-hidden rounded-3xl">
            <div className=" absolute transition-all opacity-100 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-3xl blur-xl  animate-tilt"></div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-20 transform -translate-y-1/2 focus:outline-none z-10 max-[790px]:left-32 max-[790px]:translate-y-60  "
            >
              <FaArrowCircleLeft
                className="text-[#cf0cbc] hover:scale-150 duration-200 "
                size={50}
              />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-20 transform -translate-y-1/2 focus:outline-none z-10 max-[790px]:right-32 max-[790px]:translate-y-60"
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
                    <h3 className="text-xl text-slate-950 font-bold text-center mb-2">
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
                      className="w-52 h-auto mt-5 rounded-3xl"
                    />
                    <p className="text-black mt-5">{review.content}</p>
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
