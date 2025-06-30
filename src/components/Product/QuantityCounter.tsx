"use client";

import { useState } from "react";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(0);
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => quantity > 0 && setQuantity((prev) => prev - 1);
  return (
    <div className="flex gap-2 items-center mt-20 mb-10">
      <h3 className="text-lg font-bold text-[#212337] inline-block">
        Quantity
      </h3>
      <div className="flex ">
        <div
          className="border text-lg py-2 px-4 cursor-pointer"
          onClick={decrement}
        >
          -
        </div>
        <div className="border text-lg py-2 px-4 font-bold">{quantity}</div>
        <div
          className="border text-lg py-2 px-4 cursor-pointer"
          onClick={increment}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
