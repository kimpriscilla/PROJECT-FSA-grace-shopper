import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51KSVFvDkRSmF4QSnpbWBWyNLDWTMK0rzvSMEgHUH3fXx73CxORNnu4pBVhgI27t9lro43zToldWybcCCPh7Qhz8w00DOohZCLt';

const stripe = loadStripe(PUBLIC_KEY);

export default function Checkout () {
    return (
      <div>
        <Elements stripe={stripe}>
          <PaymentForm />
        </Elements>
      </div>
    )
  };
