import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const ProductCard = ({image, title, description, price, favourite, setFavourite}) => {

  const handleFavourite = (id) => {
    const isClicked = favourite.find(elem => elem.product === id);
    
    if (isClicked) {
      const deleteFavourite = favourite.filter(elem => elem.product !== id);
      setFavourite([...deleteFavourite]);
    } else {
      setFavourite([...favourite, {product: id}]);
    }
  }

  return (
    <div className="card card-compact w-72 h-[400px] bg-base-100 shadow-xl" key={title}>

      <figure className="relative">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Headphone"
          className="w-full h-auto"
        />
        {
          favourite.length > 0 && favourite.find(elem => elem.product === title)
          ?
          <AiFillHeart 
          fontSize={24} 
          id={title} 
          onClick={() => handleFavourite(title)}
          fill="red"
          stroke="black"
          strokeWidth="0"
          className="absolute top-2 left-2 cursor-pointer"
          />
          :
          <AiFillHeart 
          fontSize={24} 
          id={title} 
          onClick={() => handleFavourite(title)}
          fill="transparent"
          stroke="black"
          strokeWidth="50px"
          className="absolute top-2 left-2 cursor-pointer"
          />
        }
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
