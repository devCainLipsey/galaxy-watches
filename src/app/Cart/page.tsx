"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/store";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";

const Cart: React.FC = () => {
  // Fetching cart items from Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  {
    /* // Dummy data for cart items
  const cartItems = [
    {
      id: 1,
      name: "Galaxy Watch 1",
      price: 199,
      imageUrl:
        "https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity: 1,
    },
    {
      id: 2,
      name: "Galaxy Watch 2",
      price: 249,
      imageUrl:
        "https://images.unsplash.com/photo-1698729616586-3ffcaa2c10f8?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity: 1,
    },
    // Add more items as needed
  ];

*/
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
