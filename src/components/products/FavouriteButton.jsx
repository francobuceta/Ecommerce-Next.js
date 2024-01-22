"use client";
import { AiFillHeart } from "react-icons/ai";
import { setLocalStorage } from "@/utils/LocalStorageFunctions";

const FavouriteButton = ({
  favourite,
  setFavourite,
  title,
  id,
  category,
  image,
  description,
  price,
}) => {
  const handleFavourite = (productId) => {
    const isClicked = favourite.find((elem) => elem.id === productId);

    if (isClicked) {
      const deleteFavourite = favourite.filter((elem) => elem.id !== productId);
      setFavourite(deleteFavourite);
      setLocalStorage("favouriteProducts", deleteFavourite);
    } else {
      const productObject = {
        id: productId,
        title: title,
        category: category,
        image: image,
        description: description,
        price: price,
      };
      setFavourite((prev) => [...prev, productObject]);
      setLocalStorage("favouriteProducts", [...favourite, productObject]);
    }
  };

  return (
    <>
      {favourite.length > 0 && favourite.find((elem) => elem.id === id) ? (
        <AiFillHeart
          fontSize={24}
          id={title}
          onClick={() => handleFavourite(id)}
          fill="red"
          stroke="black"
          strokeWidth="0"
          className="absolute top-2 left-2 cursor-pointer"
        />
      ) : (
        <AiFillHeart
          fontSize={24}
          id={title}
          onClick={() => handleFavourite(id)}
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
