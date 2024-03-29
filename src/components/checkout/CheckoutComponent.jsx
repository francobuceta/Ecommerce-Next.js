"use client";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { postPurchase } from "@/services/clientFetching";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { errorNotification } from "@/utils/Notifications";
import { useRouter } from "next/navigation";
import PaymentForm from "./PaymentForm";
import Loader from "../loader/Loader";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutComponent = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const router = useRouter();

  const productsTitle = products
    ?.map((elem) => `${elem.title} x${elem.quantity}`)
    .join(", ");

  const totalPrice = products?.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const totalPriceInCents = Math.round(totalPrice * 100); //Precio formateado para Stripe.

  const purchaseData = {
    user: user?.firstName + " " + user?.lastName,
    products: productsTitle,
    amount: totalPriceInCents,
  };

  const appearance = {
    rules: {
      ".Label": {
        color: "white",
        fontFamily: "'Oswald', sans-serif",
      },
      ".Input": {
        borderWidth: "2px",
        fontFamily: "'Oswald', sans-serif",
      },
      ".Input:focus": {
        borderColor: "#BAFF29",
      },
    },
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const service = await postPurchase(
        `/payment/${user.userCart.cartId}/payment-intents`,
        purchaseData
      );

      if (service !== "Ha ocurrido un error inesperado") {
        setClientSecret(service.payload.client_secret);
      } else {
        errorNotification(
          "Se ha producido un error inesperado. Vuelva a intentar más tarde."
        );
        setTimeout(() => router.push("/"), 3000);
      }
    };

    //Redirigir a home si el usuario no está logueado.
    if (user?.token === "") {
      router.push("/auth");
    }
    totalPrice && getClientSecret();
  }, [totalPrice]);

  return (
    <>
      {totalPrice && clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret, appearance: appearance }}
        >
          <div className="flex flex-col justify-center items-center px-5 gap-12">
            <h2 className="text-3xl text-white font-semibold">
              Confirmación de compra
            </h2>
            <PaymentForm
              userCartId={user.userCart.cartId}
              purchaseData={purchaseData}
            />
          </div>
        </Elements>
      ) : (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <Loader checkout={true} />
        </div>
      )}

      <Toaster />
    </>
  );
};

export default CheckoutComponent;
