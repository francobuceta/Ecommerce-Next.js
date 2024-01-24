"use client";
import Link from "next/link";
import { deleteRequest } from "@/services/clientFetching";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/store/slices/cartSlice";
import { PrimaryButton, PrimaryButtonOutline } from "../buttons/PrimaryButtons";

const CartControlsContainer = ({ userCart }) => {
  const dispatch = useDispatch();

  const handleEmptyCart = async () => {
    dispatch(emptyCart());
    await deleteRequest(`/api/cart/${userCart}`);
  };

  return (
    <div className="w-full flex flex-col items-center md:flex-row justify-center gap-5">
      <div className="w-full max-w-[350px] flex justify-center">
        <PrimaryButtonOutline
          content={"Vaciar Carrito"}
          styles={"text-xl font-bold mt-3 w-full max-w-[300px] h-[50px]"}
          fn={handleEmptyCart}
        />
      </div>
      <Link
        href="/checkout"
        className="w-full max-w-[350px] flex justify-center"
      >
        <PrimaryButton
          content={"Proceder a Compra"}
          styles={"text-xl font-bold mt-3 w-full max-w-[300px] h-[50px]"}
          fn={undefined}
        />
      </Link>
    </div>
  );
};

export default CartControlsContainer;
