"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import DeleteProductButton from "./DeleteProductButton";

const ProductCartCard = () => {
  const products = useSelector((state) => state.cart);
  console.log(products);

  return (
    <>
      {products.map((product) => {
        return (
          <div className="card card-side bg-base-100 shadow-xl w-full max-w-[900px] h-56 p-5" key={product._id}>
            <figure>
              <Image
                src={product.image}
                width={0}
                height={0}
                sizes="100vw"
                alt={product.title}
                className="w-[250px] h-auto object-contain"
              />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">{product.title}</h2>
                <p>Cantidad: {product.quantity} unidades</p>
                <p>Precio unitario: $ {product.price}</p>
                <p>Precio total: $ {product.quantity * product.price}</p>
              </div>

              <div className="card-actions justify-end">
                <Link href={`/products/${product.category}/${product._id}`}>
                  <button className="btn bg-custome-primary">Ver</button>
                </Link>
                <DeleteProductButton productId={product._id} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCartCard;
