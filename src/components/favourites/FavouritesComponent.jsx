"use client";
import { useState, useEffect } from "react";
import { getLocalStorage } from "@/utils/LocalStorageFunctions";
import ProductCard from "../products/ProductCard";

const FavouritesComponent = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const productsFromLocalStorage = getLocalStorage("favouriteProducts");

    if (productsFromLocalStorage) {
      setFavourite(productsFromLocalStorage);
    }
  }, []);

  return (
    <>
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
        <div>Todavía no tienes productos como favoritos</div>
      )}
    </>
  );
};

export default FavouritesComponent;
