"use client";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "@/store/slices/cartSlice";
import { setPurchaseData } from "@/store/slices/purchaseSlice";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { errorNotification } from "@/utils/Notifications";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (!error) {
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
          <button
            className="border-none rounded-md p-2 w-[200px] font-bold bg-custome-primary"
            onClick={handleSubmit}
          >
            Realizar Pago
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default PaymentForm;
