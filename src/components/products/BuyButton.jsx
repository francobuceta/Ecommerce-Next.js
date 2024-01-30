"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addProductToCart } from "@/store/slices/cartSlice";
import { PrimaryButton } from "../buttons/PrimaryButtons";
import { postPurchase } from "@/services/clientFetching";

const BuyButton = ({ product, user }) => {
  const [userCart, setUserCart] = useState(null);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (user.userCart.hasOwnProperty("cartId")) {
      setUserCart(user.userCart.cartId);
    }
  }, [user.userCart]);

  const handleAddProduct = async () => {
    if (user?.token) {
      dispatch(addProductToCart(product));
      await postPurchase(
        `/api/cart/${userCart}/product/${product._id}?qty=${product.quantity}`
      );
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
