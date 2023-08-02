"use client";
import { useState } from "react";
import CountButton from "./CountButton";
import AddToCartButton from "./AddToCartButton";
import BuyButton from "./BuyButton";

const ProductControlsContainer = ({ productDetail }) => {
  const [product, setProduct] = useState({
    productId: productDetail._id,
    quantity: 1,
  });

  return (
    <>
      <CountButton stock={productDetail.stock} setProduct={setProduct} />

      <div className="flex items-center gap-5 mt-10">
        <AddToCartButton
          product={product}
        />
        <BuyButton />
      </div>
    </>
  );
};

export default ProductControlsContainer;
