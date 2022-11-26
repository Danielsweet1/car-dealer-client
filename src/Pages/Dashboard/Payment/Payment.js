import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../../hooks/UseTitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK);
UseTitle('Payment')
const Payment = () => {
  const data = useLoaderData();
  const { carModel } = data;
  return (
    <div className="py-5">
      <div className="w-96 border shadow p-5 mx-auto my-5">
      <h3 className="text-xl font-bold text-center">Payment for {carModel}</h3>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
