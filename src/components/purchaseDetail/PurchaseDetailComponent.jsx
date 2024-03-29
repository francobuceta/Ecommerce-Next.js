"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { PrimaryButtonOutline } from "../buttons/PrimaryButtons";
import DetailsTable from "./DetailsTable";
import Confetti from "react-confetti";
import Link from "next/link";

const PurchaseDetailComponent = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  const purchaseData = useSelector((state) => state.purchase);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth - 20);
      setWindowHeight(window.innerHeight - 20);
    }

    //Redirigir a home si el usuario no está logueado o no hay compra realizada.
    if (user?.token === "" || purchaseData?.length === 0) {
      redirect("/");
    }
  }, []);

  return (
    <>
      <Confetti width={windowWidth} height={windowHeight} recycle={false} />
      <div className="flex flex-col justify-center items-center px-5 gap-5">
        <h2 className="text-3xl text-white font-semibold">¡Felicitaciones!</h2>
        <p className="text-xl text-white">
          Tu compra se ha realizado correctamente. Te hemos enviado un email
          para coordinar el envío.
        </p>
        <h3 className="text-2xl text-white font-semibold mt-5">
          Detalles de la compra
        </h3>

        <DetailsTable purchaseData={purchaseData} />

        <Link href={"/"}>
          <PrimaryButtonOutline
            content={"Ir al Inicio"}
            styles={"w-48 text-xl p-2"}
            fn={undefined}
          />
        </Link>
      </div>
    </>
  );
};

export default PurchaseDetailComponent;
