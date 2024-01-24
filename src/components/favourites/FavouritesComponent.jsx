"use client";
import { useState, useEffect } from "react";
import { getLocalStorage } from "@/utils/LocalStorageFunctions";
import ProductCard from "../products/ProductCard";
import Link from "next/link";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { PrimaryButton } from "../buttons/PrimaryButtons";

const FavouritesComponent = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const productsFromLocalStorage = getLocalStorage("favouriteProducts");

    if (productsFromLocalStorage) {
      setFavourite(productsFromLocalStorage);
    }
  }, []);

  return (
    <section className="mt-12">
      <div className="flex justify-center flex-wrap gap-8">
        {favourite.length > 0 ? (
          favourite.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              category={product.category}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center">
            <BsFillSearchHeartFill className="w-[200px] sm:w-[300px] h-auto text-custome-primary" />

            <div className="text-center mt-5">
              <p className="text-white text-2xl px-10">
                Todavía no agregaste ningún producto a favoritos.
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
      </div>
    </section>
  );
};

export default FavouritesComponent;
