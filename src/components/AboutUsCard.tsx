import React, { ReactNode } from "react";

const AboutUsCard: React.FC<{
  imageSrc: string;
  heading: string;
}> = ({ imageSrc, heading }) => {
  return (
    <>
      <div className="w-3/4 flex items-center justify-center bg-black shadow-md rounded-3xl p-6">
        <img
          src={imageSrc}
          alt="About Us"
          className="w-1/3 h-auto object-cover rounded-l-3xl mr-6 max-[1700px]:hidden"
        />
        <div className="relative px-6">
          <div
            className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity"
            aria-hidden="true"
          ></div>
          <h3 className="text-4xl text-indigo-300  font-semibold mb-4">
            {heading}
          </h3>
          <p className="text-white">
            At Galaxy Watches, we transcend the conventional boundaries of
            timekeeping, blending cutting-edge technology with timeless
            craftsmanship. Our journey began with a vision to redefine elegance
            and functionality in the world of wristwear. Each timepiece we craft
            is a testament to our unwavering commitment to excellence,
            meticulously engineered to accompany you through every moment of
            your life's journey.
          </p>
          <br />
          <p className="text-white">
            Driven by innovation and inspired by the wonders of the cosmos, our
            watches seamlessly integrate advanced features with classic design
            elements. From sleek and sophisticated designs to rugged sporty
            models, our diverse collection caters to every individual's style
            and needs. With precision engineering and attention to detail,
            Galaxy Watches stand as a symbol of sophistication and reliability,
            empowering you to navigate through the modern world with confidence
            and style.
          </p>
          <br />
          <p className="text-white">
            Embrace the fusion of style and technology with Galaxy Watches,
            where each timepiece tells a story of innovation and craftsmanship.
            Whether you seek a statement accessory for a formal occasion or a
            reliable companion for your active lifestyle, our watches are
            designed to elevate your experience and redefine the way you
            perceive time. Join us on a journey through the cosmos of horology,
            where imagination knows no bounds, and every tick of the clock is a
            testament to our commitment to excellence.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
