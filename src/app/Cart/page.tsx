"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/store";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  const updateSubtotal = (newSubtotal: number) => {
    setSubtotal(newSubtotal);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950 mx-auto px-4">
        <NavBar />
        <h1 className="text-3xl text-white text-center font-bold mb-4">
          Your Cart
        </h1>
        <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto mb-5"></span>
        {cartItems.length === 0 ? (
          <>
            <div className="text-white text-center text-xl my-8">
              No Items Added to Cart
            </div>
            <Link href="/Shop" className="flex justify-center">
              <div className="w-64 relative inline-flex  group mt-12">
                <div className="absolute transition-all duration-100 opacity-50 -inset-px bg-gradient-to-r from-[#cf0cbc] via-[#8554c7] to-[#cf0cbc] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="w-64 relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-100 bg-black font-pj rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#cf0cbc] group-hover:pl-6">
                  <span className="ml-5 group-hover:translate-x-[-1rem] transition-all duration-200 text-center">
                    Visit Shop
                  </span>
                  <FaLongArrowAltRight
                    className="-ml-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    size={20}
                  />
                </button>
              </div>
            </Link>
          </>
        ) : (
          <div className="flex flex-col max-[847px]:items-center">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
                subtotal={subtotal}
                updateSubtotal={updateSubtotal} // Pass updateSubtotal function to CartItem
              />
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-center">
            <CartTotal subtotal={subtotal} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
