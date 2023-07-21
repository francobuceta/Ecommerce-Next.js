import Image from "next/image";
import FavouriteButton from "./FavouriteButton";
import Link from "next/link";

const ProductCard = ({ id, category, image, title, description, price }) => {
  return (
    <div className="card card-compact w-72 h-[400px] bg-base-100 shadow-xl">
      <figure className="relative p-20">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt={title}
          className="w-full h-auto object-contain"
        />
        <FavouriteButton title={title} />
      </figure>

      <div className="card-body bg-custome-primary rounded-b-2xl gap-0">
        <h3 className="card-title select-none">{title}</h3>
        <p className="truncate">{description}</p>
        <span className="text-xl font-bold">$ {price}</span>
        <div className="card-actions justify-end">
          <Link href={`/products/${category}/${id}`}>
            <button className="btn bg-transparent border border-custome-secondary w-20">
              Ver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
