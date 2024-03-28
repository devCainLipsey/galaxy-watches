"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import CounterCard from "@/components/CounterCard";
import WatchCard from "@/components/WatchCard";
import Footer from "@/components/Footer";
import FilterCard from "@/components/FilterCard";

interface Watch {
  id: number;
  imageSrc: string;
  name: string;
  price: number;
  rating: number;
}

const Shop: React.FC = () => {
  const [watches, setWatches] = useState<Watch[]>([
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "TechNova Pro Series",
      price: 100,
      rating: 4,
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Infinity Pulse Tracker",
      price: 150,
      rating: 5,
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Heritage Navigator",
      price: 120,
      rating: 4,
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1642101373432-a9c683c34902?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Zenith Wave",
      price: 160,
      rating: 4,
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "VortexX Tracker",
      price: 180,
      rating: 5,
    },
    {
      id: 6,
      imageSrc:
        "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Elegance Elite",
      price: 250,
      rating: 4,
    },
    {
      id: 7,
      imageSrc:
        "https://images.unsplash.com/photo-1575125069494-6a0c5819d340?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "StellarSync Elite",
      price: 170,
      rating: 4,
    },
    {
      id: 8,
      imageSrc:
        "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "TitanX Chrono",
      price: 330,
      rating: 5,
    },
    {
      id: 9,
      imageSrc:
        "https://images.unsplash.com/photo-1669480380743-f76990b9bc44?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "FusionTech",
      price: 60,
      rating: 4,
    },
    // Add more watch data as needed
  ]);

  const handleFilterChange = (
    option: "Lowest to Highest" | "Highest to Lowest"
  ) => {
    let sortedWatches = [...watches];
    if (option === "Lowest to Highest") {
      sortedWatches.sort((a, b) => a.price - b.price);
    } else {
      sortedWatches.sort((a, b) => b.price - a.price);
    }
    setWatches(sortedWatches);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950 px-4">
        <NavBar />
        <h1 className="text-3xl text-center text-white font-bold mb-8">Shop</h1>
        <div className="flex justify-center mb-8">
          <CounterCard />
        </div>
        <div className="flex justify-center mb-8">
          <FilterCard onChange={handleFilterChange} />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {watches.map((watch) => (
              <WatchCard
                key={watch.id}
                imageSrc={watch.imageSrc}
                name={watch.name}
                price={watch.price}
                rating={watch.rating}
              />
            ))}
          </div>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Shop;
