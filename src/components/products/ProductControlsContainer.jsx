"use client";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "@/store/slices/cartSlice";
import { postPurchase } from "@/services/clientFetching";
import { useRouter } from "next/navigation";
import CountButton from "./CountButton";
import AddToCartButton from "./AddToCartButton";
import BuyButton from "./BuyButton";

const ProductControlsContainer = ({ productDetail }) => {
  const [product, setProduct] = useState({ ...productDetail, quantity: 1 });
  const [userCart, setUserCart] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const router = useRouter();

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

  useEffect(() => {
    if (user.userCart.hasOwnProperty("cartId")) {
      setUserCart(user.userCart.cartId);
    }
  }, [user.userCart]);

  return (
    <>
      <CountButton stock={productDetail.stock} setProduct={setProduct} />

      <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-10">
        <AddToCartButton
          product={product}
          handleAddProduct={handleAddProduct}
        />
        <BuyButton product={product} handleAddProduct={handleAddProduct} />
        <Toaster />
      </div>
    </>
  );
};

export default ProductControlsContainer;
