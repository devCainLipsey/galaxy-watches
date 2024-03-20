import React from "react";
import NavBar from "@/components/NavBar";
import WatchCard from "@/components/WatchCard";
import AboutUsCard from "@/components/AboutUsCard";
import ReviewSlider from "@/components/ReviewSlider";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-slate-950 relative">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-96 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-black opacity-50 "></div>

            {/* Overlay */}
            <img
              src="https://images.unsplash.com/photo-1570294438100-bbb766244bc0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-6xl  font-galaxy text-center text-white">
                Welcome to Galaxy Watches
              </h1>
              <p className="mt-4 text-3xl text-white">
                Where modern technology meets timeless style
              </p>

              <div className="w-64 relative inline-flex group mt-12">
                <div className="absolute transition-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          {/* Best Sellers Section */}
          <div className="mt-16">
            <h2 className="text-4xl text-white text-center mb-4">
              Best Sellers
            </h2>
            <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto"></span>

            <div className="mt-10 flex flex-wrap justify-center gap-20">
              <WatchCard
                imageSrc="https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="TechNova Pro Series"
                price={100}
                rating={4}
              />
              <WatchCard
                imageSrc="https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Infinity Pulse Tracker"
                price={150}
                rating={5}
              />
              <WatchCard
                imageSrc="https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Heritage Navigator"
                price={120}
                rating={3}
              />
            </div>
          </div>

          <div className="w-64 relative inline-flex group mt-12">
            <div className="absolute transition-all duration-1000 opacity-60 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              View Shop
            </button>
          </div>
          {/* About Us Section */}
          <div className="mt-16 flex justify-center">
            <AboutUsCard
              imageSrc="https://images.unsplash.com/photo-1550935268-e9e4bdc7c972?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              heading="About Us"
              paragraph={
                <>
                  <p>
                    At Galaxy Watches, we transcend the conventional boundaries
                    of timekeeping, blending cutting-edge technology with
                    timeless craftsmanship. Our journey began with a vision to
                    redefine elegance and functionality in the world of
                    wristwear. Each timepiece we craft is a testament to our
                    unwavering commitment to excellence, meticulously engineered
                    to accompany you through every moment of your life's
                    journey.
                  </p>
                  <br />
                  <p>
                    Driven by innovation and inspired by the wonders of the
                    cosmos, our watches seamlessly integrate advanced features
                    with classic design elements. From sleek and sophisticated
                    designs to rugged sporty models, our diverse collection
                    caters to every individual's style and needs. With precision
                    engineering and attention to detail, Galaxy Watches stand as
                    a symbol of sophistication and reliability, empowering you
                    to navigate through the modern world with confidence and
                    style.
                  </p>
                  <br />
                  <p>
                    Embrace the fusion of style and technology with Galaxy
                    Watches, where each timepiece tells a story of innovation
                    and craftsmanship. Whether you seek a statement accessory
                    for a formal occasion or a reliable companion for your
                    active lifestyle, our watches are designed to elevate your
                    experience and redefine the way you perceive time. Join us
                    on a journey through the cosmos of horology, where
                    imagination knows no bounds, and every tick of the clock is
                    a testament to our commitment to excellence.
                  </p>
                </>
              }
            />
          </div>
          <p className="mt-12 text-md text-white">What our customers</p>
          <h2 className="text-4xl text-white text-center mb-4">
            Say About Our Watches
          </h2>
          <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto"></span>

          {/* Review Slider Section */}
          <div className=" mt-40 relative ml-96">
            <div className="absolute inset-0 ml-20">
              <img
                src="https://images.unsplash.com/photo-1696688713460-de12ac76ebc6?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background"
                className="w-full h-full object-cover rounded-md scale-150   -translate-x-1/2"
              />
            </div>
            <ReviewSlider />
          </div>
          {/* About Us Section */}
          <div className="mt-40 flex justify-center">
            <AboutUsCard
              imageSrc="https://images.unsplash.com/photo-1550935268-e9e4bdc7c972?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              heading="About Us"
              paragraph={
                <>
                  <p>
                    At Galaxy Watches, we transcend the conventional boundaries
                    of timekeeping, blending cutting-edge technology with
                    timeless craftsmanship. Our journey began with a vision to
                    redefine elegance and functionality in the world of
                    wristwear. Each timepiece we craft is a testament to our
                    unwavering commitment to excellence, meticulously engineered
                    to accompany you through every moment of your life's
                    journey.
                  </p>
                  <br />
                  <p>
                    Driven by innovation and inspired by the wonders of the
                    cosmos, our watches seamlessly integrate advanced features
                    with classic design elements. From sleek and sophisticated
                    designs to rugged sporty models, our diverse collection
                    caters to every individual's style and needs. With precision
                    engineering and attention to detail, Galaxy Watches stand as
                    a symbol of sophistication and reliability, empowering you
                    to navigate through the modern world with confidence and
                    style.
                  </p>
                  <br />
                  <p>
                    Embrace the fusion of style and technology with Galaxy
                    Watches, where each timepiece tells a story of innovation
                    and craftsmanship. Whether you seek a statement accessory
                    for a formal occasion or a reliable companion for your
                    active lifestyle, our watches are designed to elevate your
                    experience and redefine the way you perceive time. Join us
                    on a journey through the cosmos of horology, where
                    imagination knows no bounds, and every tick of the clock is
                    a testament to our commitment to excellence.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
