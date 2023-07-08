"use client";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const FavouriteButton = ({ title }) => {
  const [favourite, setFavourite] = useState([]);

  const handleFavourite = (id) => {
    const isClicked = favourite.find((elem) => elem.product === id);

    if (isClicked) {
      const deleteFavourite = favourite.filter((elem) => elem.product !== id);
      setFavourite([...deleteFavourite]);
    } else {
      setFavourite([...favourite, { product: id }]);
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
