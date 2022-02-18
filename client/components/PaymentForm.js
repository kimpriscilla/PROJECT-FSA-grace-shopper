import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../store/order/order";
import { useHistory } from "react-router";

let tempUserId = 1;

//test payment using this card number: 4242 4242 4242 4242

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  let userId = useSelector((state) => state.auth.id);

  if (!userId) {
    userId = JSON.parse(localStorage["guest"]).id;
  }

  const cartItems = useSelector((state) => state.cartItems);

  const totalPrice = cartItems.reduce((acc, cartItem) => {
    return (acc += cartItem.pet.price * 1);
  }, 0);

  const [formData, setFormData] = useState({
    shippingAddress: "",
    billingAddress: "",
  });

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange(ev) {
    const { name, value } = ev.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const orderData = {
          amount: totalPrice * 100,
          id,
          userId,
          shippingAddress: formData.shippingAddress,
          billingAddress: formData.billingAddress,
        };

        dispatch(addOrder(orderData));
        localStorage.removeItem("cart");
        history.push("/confirmation");
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <input
          type="text"
          name="shippingAddress"
          placeholder="Shipping Address"
          onChange={handleChange}
        ></input>
        <input
          name="billingAddress"
          placeholder="Billing Address"
          onChange={handleChange}
        ></input>
        <button className="button-37">Place Order</button>
      </form>
    </>
  );
}
