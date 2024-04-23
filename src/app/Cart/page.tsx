"use client";

import React, { useState, useEffect } from "react";
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
        <div className="flex flex-col">
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
        <div className="mt-8 flex justify-center">
          <CartTotal subtotal={subtotal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
