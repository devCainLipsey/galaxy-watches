import React, { ReactNode } from "react";

const AboutUsCard: React.FC<{
  imageSrc: string;
  heading: string;
  paragraph: ReactNode;
}> = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="w-3/4 flex items-center justify-center bg-black shadow-md rounded-lg p-6">
      <img
        src={imageSrc}
        alt="About Us"
        className="w-1/3 h-auto object-cover rounded-l-lg mr-6"
      />
      <div className="relative px-6">
        <div
          className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity"
          aria-hidden="true"
        ></div>
        <h3 className="text-4xl font-semibold mb-4">{heading}</h3>
        <p className="text-white">{paragraph}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
