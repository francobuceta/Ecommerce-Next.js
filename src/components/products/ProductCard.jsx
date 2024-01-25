"use client";
import Image from "next/image";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";
import { FormatNumber } from "@/utils/CartCounts";
import { CardButton } from "../buttons/PrimaryButtons";

const ProductCard = ({
  id,
  category,
  image,
  title,
  description,
  price,
  favourite,
  setFavourite,
}) => {
  const router = useRouter();

  //Redirection with transition to product detail.
  const handleTransition = (category, productId) => {
    if (!document.startViewTransition) {
      router.push(`/products/${category}/${productId}`);
    }
    document.startViewTransition(() => {
      flushSync(() => router.push(`/products/${category}/${productId}`));
    });
  };

  return (
    <div className="card card-compact w-72 h-[400px] bg-base-100 shadow-xl dark:bg-[#ffffff]">
      <figure className="relative p-20">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt={title}
          className="w-full h-auto object-contain"
        />
        <FavouriteButton
          favourite={favourite}
          setFavourite={setFavourite}
          title={title}
          id={id}
          category={category}
          image={image}
          description={description}
          price={price}
        />
      </figure>

      <div className="card-body bg-custome-primary rounded-b-2xl gap-0">
        <h3 className="truncate card-title select-none">{title}</h3>
        <p className="truncate">{description}</p>
        <span className="text-xl font-bold">{FormatNumber(price)}</span>
        <div className="card-actions justify-end">
          <CardButton
            content={"Ver"}
            styles={"w-20 h-10 text-lg"}
            fn={() => handleTransition(category, id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
