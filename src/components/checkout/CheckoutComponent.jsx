"use client"
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { postPurchase } from '@/services/clientFetching';
import { Elements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import PaymentForm from './PaymentForm';
import Loader from '../loader/Loader';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutComponent = () => {

    const [currentProduct, setCurrentProduct] = useState("64ac15033572bd5ec6b11df1");
    const [clientSecret, setClientSecret] = useState(null);
    const products = useSelector(state => state.cart);
    console.log(products);

    const appearance = {
        rules: {
            ".Label": {
                color: "white",
                fontFamily: "'Oswald', sans-serif"
            },
            ".Input": {
                borderWidth: "2px",
                fontFamily: "'Oswald', sans-serif"
            },
            ".Input:focus": {
                borderColor: "#BAFF29"
            }
        }
    }

    useEffect(() => {
        const getClientSecret = async () => {
            console.log(currentProduct);
            const service = await postPurchase(`/payment/payment-intents?id=${currentProduct}`);
            if (service) {
                setClientSecret(service.payload.client_secret);
                console.log(service);
            } else {
                console.log("Hubo un error al traer el client secret");
            }
        }
        currentProduct && getClientSecret();
    },[currentProduct]);

    return(
        <>
            {
                currentProduct && clientSecret ?
                <Elements stripe={stripePromise} options={{clientSecret:clientSecret, appearance:appearance}}>
                    <div className='flex flex-col justify-center items-center px-5 gap-12'>
                        <h2 className='text-3xl text-white font-semibold'>Confirmación de compra</h2>
                        <PaymentForm />
                    </div>
                </Elements>
                :
                <div className='w-full h-[50vh] flex justify-center items-center'>
                    <Loader checkout={true} />
                </div>
            }
        </>
    );
}

export default CheckoutComponent;