"use client";
import { useState } from "react";

const CountButton = ({ stock, setProduct }) => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
      setProduct(prev => ({...prev, quantity: count + 1}));
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setProduct(prev => ({...prev, quantity: count - 1}));
    }
  };

  return (
    <div>
      <div className="flex items-center gap-10 mt-10">
        <div className="bg-white w-10 h-10 p-2 rounded-md flex justify-center">
          <span className="text-xl text-black">{count}</span>
        </div>
        <div className="flex gap-2">
          <button
            className="border rounded-md w-20 text-2xl hover:bg-custome-primary hover:text-black hover:border-none"
            onClick={decreaseCount}
          >
            -
          </button>
          <button
            className="border rounded-md w-20 text-2xl hover:bg-custome-primary hover:text-black hover:border-none"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountButton;
