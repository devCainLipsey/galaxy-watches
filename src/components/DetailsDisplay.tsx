import React from "react";
import Image from "next/image";

const DetailsDisplay: React.FC<{ mainImage: string; thumbnails: string[] }> = ({
  mainImage,
  thumbnails,
}) => {
  return (
    <div className="w-full bg-black mt-5  py-5 px-5 rounded-t-3xl ">
      <div className="w-full md:w-2/3 mx-auto">
        <Image
          src={mainImage}
          alt="Main Image"
          className="w-full h-auto md:h-96 md:w-full object-cover rounded-3xl mb-5"
          width={2367}
          height={1573}
        />
      </div>
      <div className="w-full  mx-auto mt-10 flex flex-wrap justify-center gap-16">
        {thumbnails.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            className="w-1/2  sm:w-1/3 md:w-1/4 cursor-pointer rounded-3xl mb-5 hover:-translate-y-4 duration-300"
            width={2367}
            height={1573}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsDisplay;
