import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface OrderPlacedOverlayProps {
  onClose: () => void; // Function to handle closing the overlay
}

const OrderPlacedOverlay: React.FC<OrderPlacedOverlayProps> = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-black p-8 rounded-lg text-center border-2 border-[#cf0cbc]">
        <h2 className="text-xl text-white font-semibold mb-4 flex items-center justify-center">
          Thank you for your order!
          <IoIosCheckmarkCircle className="ml-2 text-green-500" />
        </h2>
        <p className="mb-5">Redirecting to Home Page</p>
      </div>
    </div>
  );
};

export default OrderPlacedOverlay;
