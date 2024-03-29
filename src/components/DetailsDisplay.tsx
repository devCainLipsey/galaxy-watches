"use client";

import React, { useState } from "react";

const DetailsDisplay: React.FC<{ images: string[] }> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full bg-black mt-5 py-5 px-5 rounded-t-3xl">
      <div className="w-full md:w-2/3 mx-auto">
        <img
          src={mainImage}
          alt="Main Image"
          className="w-full h-auto md:h-96 md:w-full object-cover rounded-3xl mb-20"
        />
      </div>
      <div className="w-full  mx-auto mt-4 flex flex-wrap justify-center gap-16">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-1/3 md:w-1/4 cursor-pointer rounded-3xl mb-20 hover:-translate-y-4 duration-300"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsDisplay;
