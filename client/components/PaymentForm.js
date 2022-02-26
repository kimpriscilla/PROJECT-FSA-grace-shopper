import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../store/order/order";
import { getCart } from "../store/cart/cart";
import { useHistory } from "react-router";

let tempUserId = 1;

//test payment using this card number: 4242 4242 4242 4242

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      width: "10%",
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "25px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "white" },
      "::placeholder": { color: "black" },
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
  console.log("HELLOOOOOO USER IDDDDD--->", userId);

  const totalPrice = cartItems.reduce((acc, cartItem) => {
    return (acc += cartItem.pet.price * 1);
  }, 0);

  const [formData, setFormData] = useState({
    sStreet: "",
    sCity: "",
    sZip: "",
    sState: "",
    bStreet: "",
    bCity: "",
    bZip: "",
    bState: "",
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

          sStreet: formData.sStreet,
          sCity: formData.sCity,
          sZip: formData.sZip,
          sState: formData.sState,
          bStreet: formData.bStreet,
          bCity: formData.bCity,
          bZip: formData.bZip,
          bState: formData.bState,
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
      <div className="wrapper">
        <h4 className="text-uppercase">Payment Details</h4>
        <CardElement options={CARD_OPTIONS} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="sub-header">Shipping Address</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-md-1">Street</th>
                <th className="col-md-2">City</th>
                <th className="col-md-3">Zip</th>
                <th className="col-md-3">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-md-1">
                  {" "}
                  <input
                    type="text"
                    name="sStreet"
                    placeholder="Shipping Street Address"
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="col-md-2">
                  {" "}
                  <input
                    type="text"
                    name="sCity"
                    placeholder="Shipping City"
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="col-md-3">
                  <input
                    type="text"
                    name="sZip"
                    placeholder="Shipping Zip Code"
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="col-md-3">
                  {" "}
                  <input
                    type="text"
                    name="sState"
                    placeholder="Shipping State"
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="sub-header">Billing Address</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-md-1">Street</th>
                <th className="col-md-2">City</th>
                <th className="col-md-3">Zip</th>
                <th className="col-md-3">State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-md-1">
                  <input
                    type="text"
                    name="bStreet"
                    placeholder="Billing Street Address"
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="col-md-2">
                  {" "}
                  <input
                    type="text"
                    name="bCity"
                    placeholder="Billing State"
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="col-md-3">
                  <input
                    type="text"
                    name="bZip"
                    placeholder="Billing Zip Code"
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="col-md-3">
                  {" "}
                  <input
                    type="text"
                    name="bState"
                    placeholder="Billing State"
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-outline-warning btn-md rounded-pill">
          Place Order
        </button>
      </form>
    </>
  );
}
