"use client";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "@/store/slices/cartSlice";
import { setPurchaseData } from "@/store/slices/purchaseSlice";
import { postPurchase } from "@/services/clientFetching";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { errorNotification } from "@/utils/Notifications";
import { PrimaryButton } from "../buttons/PrimaryButtons";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentForm = ({ userCartId, purchaseData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { push } = useRouter();

  const confirmPaymentInBackend = async () => {
    try {
      const response = await postPurchase(
        `/payment/${userCartId}/payment-confirmation`,
        purchaseData
      );
      return response;
    } catch (error) {
      errorNotification(
        "Se ha producido un error al procesar el pago. Intente de nuevo más tarde."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (!error) {
      confirmPaymentInBackend();
      dispatch(setPurchaseData(cart));
      dispatch(emptyCart());
      push("/purchaseDetail");
    } else {
      errorNotification(
        "Se ha producido un error al procesar el pago. Intente de nuevo más tarde."
      );
    }
  };

  return (
    <>
      <form className="w-full max-w-[600px]">
        <PaymentElement />
        <div className="mt-5 flex justify-end">
          <PrimaryButton
            content={"Realizar Pago"}
            styles={"font-bold mt-3 p-2 w-[200px]"}
            fn={handleSubmit}
          />
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default PaymentForm;
