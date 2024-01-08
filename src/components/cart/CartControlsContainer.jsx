"use client";
import Link from "next/link";
import { deleteRequest } from "@/services/clientFetching";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/store/slices/cartSlice";

const CartControlsContainer = ({ userCart }) => {
  const dispatch = useDispatch();

  const handleEmptyCart = async () => {
    dispatch(emptyCart());
    await deleteRequest(`/api/cart/${userCart}`);
  }

  return (
    <div className="w-full flex flex-col items-center md:flex-row justify-center gap-5">
      <div className="w-full max-w-[350px] flex justify-center">
        <button className="border-none rounded-md w-full max-w-[300px] h-[50px] bg-custome-gray font-bold text-lg"
          onClick={handleEmptyCart}
        >
          Vaciar Carrito
        </button>
      </div>
      <Link href="/checkout" className="w-full max-w-[350px] flex justify-center">
        <button className="border-none rounded-md w-full max-w-[300px] h-[50px] bg-custome-gray font-bold text-lg">
          Proceder a Compra
        </button>
      </Link>
    </div>
  );
};

export default CartControlsContainer;
