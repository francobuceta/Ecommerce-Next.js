"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/store/slices/cartSlice";
import { postPurchase } from "@/services/clientFetching";

const AddToCartButton = ({ product }) => {
  const [userCart, setUserCart] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if(user.userCart.hasOwnProperty("cartId")) {
      setUserCart(user.userCart.cartId);
    }
  },[user.userCart]);

  const handleAddProduct = async () => {
    dispatch(addProductToCart(product));
    await postPurchase(`/api/cart/${userCart}/product/${product._id}?qty=${product.quantity}`);
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
