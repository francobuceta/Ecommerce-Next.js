import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        })
        if (!error) {
            console.log("Pago completado");
        } else {
            console.log(error);
        }
    }

  return (
    <form className="w-full max-w-[600px]">
        <PaymentElement />
        <div className="mt-5 flex justify-end">
            <button className="border-none rounded-md p-2 w-[200px] font-bold bg-custome-primary" onClick={handleSubmit}>
                Realizar Pago
            </button>
        </div>
    </form>
  )
}

export default PaymentForm;
