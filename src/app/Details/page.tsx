import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetailsDisplay from "@/components/DetailsDisplay";
import DetailsDescription from "@/components/DetailsDescription";

const DetailsPage: React.FC = () => {
  // Sample image URLs
  const images = [
    "https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950">
        <NavBar />
        <h1 className="text-3xl text-white text-center ">Watch Details</h1>
        <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto mt-5"></span>
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center w-full lg:w-3/4">
            <DetailsDisplay images={images} />
            <DetailsDescription
              heading="Sample Watch"
              price={99.99}
              starRating={4.5}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet metus et orci consequat, eget tincidunt mi congue."
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DetailsPage;
