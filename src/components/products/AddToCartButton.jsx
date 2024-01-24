"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/store/slices/cartSlice";
import { postPurchase } from "@/services/clientFetching";
import { useRouter } from "next/navigation";
import { PrimaryButtonOutline } from "../buttons/PrimaryButtons";

const AddToCartButton = ({ product, user }) => {
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
    <PrimaryButtonOutline
      content={"Agregar al carrito"}
      styles={"w-52 text-xl p-2"}
      fn={handleAddProduct}
    />
  );
};

export default AddToCartButton;
