"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProductCartCard from "./ProductCartCard";
import CartControlsContainer from "./CartControlsContainer";
import { PrimaryButton } from "../buttons/PrimaryButtons";
import { calculatedTotalPrice } from "@/utils/CartCounts";

const CartContainer = () => {
  const [noProducts, setNoProducts] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (products?.length === 0) {
      setNoProducts(true);
    }

    calculatedTotalPrice(products, setTotalPrice);
  }, [products]);

  return (
    <>
      {!noProducts ? (
        <>
          <ProductCartCard products={products} user={user} />

          <div className="flex justify-center mt-5">
            <div className="w-fit bg-custome-primary p-2">
              <p className="text-2xl text-black">TOTAL: {totalPrice}</p>
            </div>
          </div>

          <CartControlsContainer userCart={user.userCart.cartId} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/img/empty_cart3.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Carrito vacío"
            className="w-[200px] sm:w-[300px] h-auto object-contain rounded-full"
          />

          <div className="text-center mt-5">
            <p className="text-white text-2xl px-10">
              Todavía no agregaste ningún producto al carrito
            </p>

            <Link href="/products/all">
              <PrimaryButton
                content={"Ver Catálogo"}
                styles={"text-xl w-40 h-10 mt-3"}
                fn={undefined}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
