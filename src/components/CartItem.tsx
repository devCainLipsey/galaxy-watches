"use client";

import React, { useState } from "react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrement = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const total = price * itemQuantity;

  return (
    <div className="bg-black p-4 rounded-lg shadow-md flex items-center mb-4">
      <div className="flex items-center mr-4">
        <img src={imageUrl} alt={name} className="w-52 h-auto rounded-3xl" />
        <div className="ml-4">
          <h2 className="text-lg text-white font-semibold">{name}</h2>
          <p className="text-xl text-green-500 font-semibold">${price}</p>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <label className="text-lg text-white text-center font-semibold mb-1">
          Quantity:
        </label>
        <div className="flex items-center justify-center mb-2">
          <button
            className="px-2 py-1 bg-[#8554c7] text-white rounded-md hover:bg-[#cf0cbc]"
            onClick={handleDecrement}
            disabled={itemQuantity === 1}
          >
            -
          </button>
          <div className="text-xl text-white font-semibold mx-2">
            {itemQuantity}
          </div>
          <button
            className="px-2 py-1 bg-[#8554c7] text-white rounded-md hover:bg-[#cf0cbc]"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <label className="text-lg text-white font-semibold mb-1">Total:</label>
        <div className="text-lg text-green-500 font-semibold">${total}</div>
      </div>
      <button className="px-4 py-2 bg-[#8554c7] text-white rounded-md hover:bg-[#cf0cbc] ml-auto">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
