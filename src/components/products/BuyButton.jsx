"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addProductToCart } from "@/store/slices/cartSlice";
import { PrimaryButton } from "../buttons/PrimaryButtons";

const BuyButton = ({ product, user }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleAddProduct = () => {
    if (user?.token) {
      dispatch(addProductToCart(product));
    } else {
      router.push("/auth");
    }
  };

  return (
    <Link href="/checkout">
      <PrimaryButton 
        content={"Comprar ahora"}
        styles={"w-52 text-xl p-2"}
        fn={handleAddProduct}
      />
    </Link>
  );
};

export default BuyButton;
