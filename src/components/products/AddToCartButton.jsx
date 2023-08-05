"use client";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/store/slices/cartSlice";

const addToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <button
      className="border border-none rounded-md w-52 text-xl text-white p-2 bg-custome-black hover:bg-white hover:text-black"
      onClick={handleAddProduct}
    >
      Agregar al carrito
    </button>
  );
};

export default addToCartButton;
