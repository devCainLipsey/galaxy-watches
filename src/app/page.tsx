import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import WatchCard from "@/components/WatchCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import CounterCard from "@/components/CounterCard";
import ReviewSlider from "@/components/ReviewSlider";
import AboutUsCard from "@/components/AboutUsCard";
import ContactUsForm from "@/components/ContactUsForm";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div
        className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950
 relative"
      >
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-96 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-black opacity-50 "></div>

            {/* Overlay */}
            <img
              src="https://images.unsplash.com/photo-1570294438100-bbb766244bc0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
              alt="Background"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-6xl  font-galaxy text-center text-white">
                Welcome to Galaxy Watches
              </h1>
              <p className="mt-4 text-3xl text-white  max-[730px]:text-balance max-[730px]:text-center  ">
                Where modern technology meets timeless style
              </p>
              <Link href="/Shop">
                <div className="w-64 relative inline-flex group mt-12">
                  <div className="absolute transition-all duration-100 opacity-50 -inset-px bg-gradient-to-r from-[#cf0cbc] via-[#8554c7] to-[#cf0cbc] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-100 bg-black font-pj rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#cf0cbc] group-hover:pl-6">
                    <span className="ml-5 group-hover:translate-x-[-1rem] transition-all duration-200 text-center">
                      Shop
                    </span>
                    <FaLongArrowAltRight
                      className="-ml-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      size={20}
                    />
                  </button>
                </div>
              </Link>
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
                id={1}
                imageSrc="https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
                name="TechNova Pro Series"
                price={100}
                starRating={4}
              />
              <WatchCard
                id={2}
                imageSrc="https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
                name="Infinity Pulse Tracker"
                price={150}
                starRating={5}
              />
              <WatchCard
                id={3}
                imageSrc="https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
                name="Heritage Navigator"
                price={120}
                starRating={3}
              />
            </div>
          </div>
          <Link href="/Shop">
            <div className="w-64 relative inline-flex group mt-12">
              <div className="absolute transition-all duration-100 opacity-50 -inset-px bg-gradient-to-r from-[#cf0cbc] via-[#8554c7] to-[#cf0cbc] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-100 bg-black font-pj rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#cf0cbc] group-hover:pl-6">
                <span className="ml-5 group-hover:translate-x-[-1rem] transition-all duration-200 text-center">
                  View Shop
                </span>
                <FaLongArrowAltRight
                  className="-ml-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  size={20}
                />
              </button>
            </div>
          </Link>
          <CounterCard />

          <p className="mt-20  text-md text-white">What our customers</p>
          <h2 className="text-4xl text-white text-center mb-4">
            Say About Our Watches
          </h2>
          <span className="mb-15 h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto"></span>

          {/* Review Slider Section */}
          <div className=" mt-40 relative ml-[33rem] max-[1300px]:ml-[5rem] max-[790px]:ml-[4.5rem]  max-[790px]:w-[600px]  max-[670px]:w-[450px] max-[670px]:ml-[2.5rem]">
            <div className="absolute inset-0 max-[670px]:w-[350px]  ">
              <img
                src="https://images.unsplash.com/photo-1696688713460-de12ac76ebc6?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
                alt="Background"
                className="w-full h-full object-cover rounded-2xl scale-150  -translate-x-[21rem] max-[1300px]:hidden"
              />
            </div>
            <ReviewSlider />
          </div>
          {/* About Us Section */}
          <div className="mt-60 mb-20 flex justify-center">
            <AboutUsCard
              imageSrc="https://images.unsplash.com/photo-1680113727062-8a118574b782?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress"
              heading="About Us"
            />
          </div>
          <ContactUsForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
