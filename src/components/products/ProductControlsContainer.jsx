"use client";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import CountButton from "./CountButton";
import AddToCartButton from "./AddToCartButton";
import BuyButton from "./BuyButton";

const ProductControlsContainer = ({ productDetail }) => {
  const [product, setProduct] = useState({ ...productDetail, quantity: 1 });

  const user = useSelector((state) => state.user);

  return (
    <>
      <CountButton stock={productDetail.stock} setProduct={setProduct} />

      <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-10">
        <AddToCartButton product={product} user={user} />
        <BuyButton product={product} user={user} />
        <Toaster />
      </div>
    </>
  );
};

export default ProductControlsContainer;
