"use client";
import Image from "next/image";
import Link from "next/link";
import DeleteProductButton from "./DeleteProductButton";
import { FormatNumber } from "@/utils/CartCounts";

const ProductCartCard = ({ products, user }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="card flex-col sm:card-side bg-base-100 shadow-xl w-full max-w-[900px] h-auto sm:h-64 md:h-56 sm:p-5 card_bg-darkMode"
            key={product._id}
          >
            <figure>
              <Image
                src={product.image}
                width={0}
                height={0}
                sizes="100vw"
                alt={product.title}
                className="w-[250px] h-[200px] sm:h-auto object-cover sm:object-contain"
              />
            </figure>
            <div className="card-body">
              <div className="card_text-darkMode">
                <h2 className="card-title">{product.title}</h2>
                <p>Cantidad: {product.quantity} unidades</p>
                <p>Precio unitario: {FormatNumber(product.price)}</p>
                <p>
                  Precio total: {FormatNumber(product.quantity * product.price)}
                </p>
              </div>

              <div className="card-actions justify-end mt-7 sm:mt-0">
                <Link href={`/products/${product.category}/${product._id}`}>
                  <button className="btn bg-custome-primary border-none cartCard_bg-darkMode">
                    Ver
                  </button>
                </Link>
                <DeleteProductButton
                  productId={product._id}
                  userCartId={user.userCart.cartId}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCartCard;
