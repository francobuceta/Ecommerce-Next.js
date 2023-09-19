"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProductCartCard from "./ProductCartCard";

const CartContainer = () => {
  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  return (
    <>
      {products?.length > 0 ? (
        <ProductCartCard products={products} user={user} />
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
              <button className="btn btn-active bg-custome-primary text-xl text-custome-secondary border-none w-40 h-10 mt-3">
                Ver Catálogo
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
