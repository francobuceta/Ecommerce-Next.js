import Image from "next/image";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";
import { FormatNumber } from "@/utils/CartCounts";

const ProductCard = ({ id, category, image, title, description, price }) => {

  const router = useRouter();

  //Redirection with transition to product detail.
  const handleTransition = (category, productId) => {
    if(!document.startViewTransition) {
      router.push(`/products/${category}/${productId}`);
    }
    document.startViewTransition(() => {
      flushSync(() => router.push(`/products/${category}/${productId}`));
    });
  }

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
        <h3 className="truncate card-title select-none">{title}</h3>
        <p className="truncate">{description}</p>
        <span className="text-xl font-bold">{FormatNumber(price)}</span>
        <div className="card-actions justify-end">
          <button className="btn bg-transparent border border-custome-secondary w-20"
            onClick={() => handleTransition(category, id)}>
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
