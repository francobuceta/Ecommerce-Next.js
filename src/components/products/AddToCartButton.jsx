"use client";
import { PrimaryButtonOutline } from "../buttons/PrimaryButtons";

const AddToCartButton = ({ handleAddProduct }) => {
  return (
    <PrimaryButtonOutline
      content={"Agregar al carrito"}
      styles={"w-52 text-xl p-2"}
      fn={handleAddProduct}
    />
  );
};

export default AddToCartButton;
