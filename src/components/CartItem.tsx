"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/features/store"; // Import RootState

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  subtotal: number; // Add subtotal prop
  updateSubtotal: (newSubtotal: number) => void; // Define updateSubtotal prop
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  subtotal,
  updateSubtotal,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrement = () => {
    setItemQuantity(itemQuantity + 1);
    updateSubtotal(subtotal + price); // Update subtotal when quantity increases
  };

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      updateSubtotal(subtotal - price); // Update subtotal when quantity decreases
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(id)); // Dispatch the removeItemFromCart action with the item ID

    // Calculate subtotal based on remaining cart items
    const remainingSubtotal = cartItems.reduce((total, item) => {
      if (item.id !== id) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);

    updateSubtotal(remainingSubtotal); // Update subtotal with the calculated value
  };

  const total = price * itemQuantity;

  return (
    <div className="bg-black p-4 rounded-lg shadow-md flex items-center justify-between mb-4  ">
      <div className="">
        <img src={imageUrl} alt={name} className=" w-52  h-auto rounded-3xl" />
        <div className="">
          <h2 className="text-lg text-md text-left text-white font-semibold ">
            {name}
          </h2>
          <p className="text-xl text-green-500 font-semibold ">${price}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:mr-32 mr-5 ">
        <label className="text-lg text-white text-center font-semibold mb-2">
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
      <div className="flex flex-col items-center mr-20   ">
        <label className="text-lg text-white font-semibold mb-2">Total:</label>
        <div className="text-lg text-green-500 font-semibold">${total}</div>
      </div>
      <button
        className="px-4 py-2 bg-[#8554c7] text-white rounded-md hover:bg-[#cf0cbc] ml-4"
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
