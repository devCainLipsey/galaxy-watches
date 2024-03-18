import React from "react";
import NavBar from "@/components/NavBar";
import WatchCard from "@/components/WatchCard";
import styles from "@/styles/Home.module.css"; // Import custom CSS module

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-slate-950 relative">
        <div className="flex flex-col justify-center items-center">
          <div className=" w-full h-96 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-black opacity-50 "></div>

            {/* Overlay */}
            <img
              src="https://images.unsplash.com/photo-1570294438100-bbb766244bc0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold text-center text-white">
                Welcome to Galaxy Watches
              </h1>
              <p className="mt-4 text-3xl text-white">
                Best place in the universe to tell time!
              </p>

              <div className="w-64 relative inline-flex group mt-12">
                <div className="absolute transition-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-4xl text-white text-center mb-4">
              Best Sellers
            </h2>
            <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto"></span>

            <div className="mt-10 flex flex-wrap justify-center gap-8">
              <WatchCard
                imageSrc="https://images.unsplash.com/photo-1629582183727-86788aeaef34?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Watch 1"
                price={100}
                rating={4}
              />
              <WatchCard
                imageSrc="https://images.unsplash.com/photo-1629582183727-86788aeaef34?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Watch 2"
                price={150}
                rating={5}
              />
              <WatchCard
                imageSrc="https://images.unsplash.com/photo-1629582183727-86788aeaef34?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Watch 3"
                price={120}
                rating={3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
