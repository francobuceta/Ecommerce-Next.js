"use client";
import { AiFillHeart } from "react-icons/ai";
import { setLocalStorage } from "@/utils/LocalStorageFunctions";

const FavouriteButton = ({ favourite, setFavourite, title }) => {

  const handleFavourite = (id) => {
    const isClicked = favourite.find((elem) => elem.product === id);

    if (isClicked) {
      const deleteFavourite = favourite.filter((elem) => elem.product !== id);
      setFavourite(deleteFavourite);
      setLocalStorage('favouriteProducts', deleteFavourite);
    } else {
      setFavourite(prev => [...prev, { product: id }]);
      setLocalStorage('favouriteProducts', [...favourite, { product: id }]);
    }
  };

  return (
    <>
      {favourite.length > 0 &&
      favourite.find((elem) => elem.product === title) ? (
        <AiFillHeart
          fontSize={24}
          id={title}
          onClick={() => handleFavourite(title)}
          fill="red"
          stroke="black"
          strokeWidth="0"
          className="absolute top-2 left-2 cursor-pointer"
        />
      ) : (
        <AiFillHeart
          fontSize={24}
          id={title}
          onClick={() => handleFavourite(title)}
          fill="transparent"
          stroke="black"
          strokeWidth="50px"
          className="absolute top-2 left-2 cursor-pointer"
        />
      )}
    </>
  );
};

export default FavouriteButton;
