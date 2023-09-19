"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/store/slices/cartSlice";

const BuyButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <Link href="/checkout">
      <button className="border border-none rounded-md w-52 text-xl text-black p-2 bg-custome-primary hover:bg-white"
        onClick={handleAddProduct}
      >
        Comprar ahora
      </button>
    </Link>
  );
};

export default BuyButton;
