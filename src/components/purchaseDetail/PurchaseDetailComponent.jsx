"use client";
import { useEffect, useState } from "react";
import DetailsTable from "./DetailsTable";
import Confetti from "react-confetti";
import Link from "next/link";

const PurchaseDetailComponent = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth - 20)
      setWindowHeight(window.innerHeight - 20)
    }
  },[]);

  return (
    <>
      <Confetti
        width={windowWidth}
        height={windowHeight}
        recycle={false}
      />
      <div className="flex flex-col justify-center items-center px-5 gap-5">
        <h2 className="text-3xl text-white font-semibold">¡Felicitaciones!</h2>
        <p className="text-xl text-white">
          Tu compra se ha realizado correctamente. Te hemos enviado un email
          para coordinar el envío.
        </p>
        <h3 className="text-2xl text-white font-semibold mt-5">
          Detalles de la compra
        </h3>

        <DetailsTable />

        <Link href={"/"}>
          <button
            className="border border-none rounded-md w-48 text-xl text-white p-2 bg-custome-black hover:bg-white hover:text-black mt-10"
          >
            Ir al Inicio
          </button>
        </Link>
      </div>
    </>
  );
};

export default PurchaseDetailComponent;
