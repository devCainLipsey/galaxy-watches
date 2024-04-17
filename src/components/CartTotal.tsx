import React from "react";

interface CartTotalProps {
  subtotal: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ subtotal }) => {
  const shippingCost = 5.0;
  const orderTotal = subtotal + shippingCost;

  return (
    <div className="bg-black p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg text-white text-center font-semibold mb-2">
        Cart Total
      </h2>
      <span className="h-0.5 bg-gradient-to-r from-[#8554c7] via-[#cf0cbc] to-[#8554c7] opacity-100 transition-opacity w-28 block mx-auto"></span>
      <p className="text-sm text-white mb-2">
        Items Subtotal:
        <span className="text-green-500"> ${subtotal.toFixed(2)}</span>
      </p>
      <p className="text-sm text-white mb-2">
        Shipping Cost:{" "}
        <span className="text-green-500">${shippingCost.toFixed(2)}</span>
      </p>
      <p className="text-lg text-white font-semibold mb-2">
        Order Total:{" "}
        <span className="text-green-500">${orderTotal.toFixed(2)}</span>
      </p>
      <button className="px-4 py-2 bg-[#8554c7] text-white rounded-md hover:bg-[#cf0cbc]">
        Order Now
      </button>
    </div>
  );
};

export default CartTotal;
