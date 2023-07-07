"use client"
import { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({image, title, description, price}) => {

  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {

  }

  return (
    <div className="card card-compact w-72 h-[400px] bg-base-100 shadow-xl">

      <figure className="relative">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Headphone"
          className="w-full h-auto"
        />
        <AiOutlineHeart fontSize={24} className="absolute top-2 left-2" id={title} onClick={() => handleFavourite}/>
      </figure>

      <div className="card-body bg-custome-primary rounded-b-2xl gap-0">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
        <span className="text-xl font-bold">{price}</span>
        <div className="card-actions justify-end">
          <button className="btn bg-transparent border border-custome-secondary w-20">
            Ver
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
