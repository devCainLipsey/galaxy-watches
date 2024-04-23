import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface ItemAddedOverlayProps {
  onClose: () => void; // Function to handle closing the overlay
}

const ItemAddedOverlay: React.FC<ItemAddedOverlayProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-black p-8 rounded-lg text-center border-2 border-[#cf0cbc]">
        <h2 className="text-xl text-white font-semibold mb-4 flex items-center justify-center">
          Item Added to Cart
          <IoIosCheckmarkCircle className="ml-2 text-green-500" />
        </h2>

        <button
          className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemAddedOverlay;
