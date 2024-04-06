import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-600 to-slate-950 mx-auto px-4">
        <NavBar />
        <h1 className="text-3xl text-center font-bold mb-4">Checkout</h1>
        <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto mb-5"></span>
        <CheckoutForm />
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
