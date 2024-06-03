"use client";

import React, { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetailsDisplay from "@/components/DetailsDisplay";
import DetailsDescription from "@/components/DetailsDescription";

interface watchDetails {
  id: string;
  name: string;
  price: number;
  starRating: number;
  description: string;
  imageSrc: string | string[];
}

const watchDetails: Record<string, watchDetails> = {
  1: {
    id: "1",
    name: "TechNova Pro Series",
    price: 100,
    starRating: 4,
    description: "Description for TechNova Pro Series",
    imageSrc: [
      "https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  2: {
    id: "2",
    name: "Infinity Pulse Tracker",
    price: 150,
    starRating: 5,
    description: "Description for Infinity Pulse Tracker",
    imageSrc: [
      "https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  3: {
    id: "3",
    name: "Heritage Navigator",
    price: 120,
    starRating: 4,
    description: "Description for Heritage Navigator",
    imageSrc:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  4: {
    id: "4",
    name: "Zenith Wave",
    price: 160,
    starRating: 4,
    description: "Description for Zenith Wave",
    imageSrc:
      "https://images.unsplash.com/photo-1642101373432-a9c683c34902?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  5: {
    id: "5",
    name: "VortexX Tracker",
    price: 180,
    starRating: 5,
    description: "Description for VortexX Tracker",
    imageSrc:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  6: {
    id: "6",
    name: "Elegance Elite",
    price: 250,
    starRating: 4,
    description: "Description for Elegance Elite",
    imageSrc:
      "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  7: {
    id: "7",
    name: "StellarSync Elite",
    price: 170,
    starRating: 4,
    description: "Description for StellarSync Elite",
    imageSrc:
      "https://images.unsplash.com/photo-1575125069494-6a0c5819d340?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  8: {
    id: "8",
    name: "TitanX Chrono",
    price: 330,
    starRating: 5,
    description: "Description for TitanX Chrono",
    imageSrc:
      "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  9: {
    id: "9",
    name: "FusionTech",
    price: 60,
    starRating: 4,
    description: "Description for FusionTech",
    imageSrc:
      "https://images.unsplash.com/photo-1669480380743-f76990b9bc44?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

const DetailsPage: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (typeof id !== "string" || !watchDetails[id]) {
    return <div>Watch details not found</div>;
  }

  const { name, price, starRating, description, imageSrc } = watchDetails[id];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950">
        <NavBar />
        <h1 className="text-3xl text-white text-center ">Watch Details</h1>
        <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto mt-5"></span>
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center w-full lg:w-3/4">
            <DetailsDisplay
              mainImage={Array.isArray(imageSrc) ? imageSrc[0] : imageSrc}
              thumbnails={[
                Array.isArray(imageSrc) ? imageSrc[0] : imageSrc,
                Array.isArray(imageSrc) ? imageSrc[0] : imageSrc,
                Array.isArray(imageSrc) ? imageSrc[0] : imageSrc,
              ]}
            />
            <DetailsDescription
              name={name}
              price={price}
              starRating={starRating}
              description={description}
              mainImage={Array.isArray(imageSrc) ? imageSrc[0] : imageSrc}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const SuspendedDetailsPage: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DetailsPage />
  </Suspense>
);

export default SuspendedDetailsPage;
