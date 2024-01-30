"use client";
import Link from "next/link";
import { PrimaryButton } from "../buttons/PrimaryButtons";

const BuyButton = ({ handleAddProduct }) => {
  return (
    <Link href="/checkout">
      <PrimaryButton
        content={"Comprar ahora"}
        styles={"w-52 text-xl p-2"}
        fn={handleAddProduct}
      />
    </Link>
  );
};

export default BuyButton;
