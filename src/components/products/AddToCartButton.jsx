"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/store/slices/cartSlice";
import { postPurchase } from "@/services/clientFetching";
import { useRouter } from "next/navigation";

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
    <button
      className="border border-none rounded-md w-52 text-xl text-white p-2 bg-custome-black hover:bg-white hover:text-black"
      onClick={handleAddProduct}
    >
      Agregar al carrito
    </button>
  );
};

export default AddToCartButton;
