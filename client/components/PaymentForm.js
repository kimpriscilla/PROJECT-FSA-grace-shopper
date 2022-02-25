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
      width: "50%",
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "25px",
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
          //shippingAddress: formData.shippingAddress,
          //billingAddress: formData.billingAddress,
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
      <input
        type="text"
        name="sStreet"
        placeholder="Shipping Street Address"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="sCity"
        placeholder="Shipping City"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="sZip"
        placeholder="Shipping Zip Code"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="sState"
        placeholder="Shipping State"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="bStreet"
        placeholder="Billing Street Address"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="bCity"
        placeholder="Billing State"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="bZip"
        placeholder="Billing Zip Code"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="bState"
        placeholder="Billing State"
        onChange={handleChange}
      ></input>

      <button className="button-37">Place Order</button>
    </form>
  );

  //   //   <div className="wrapper">
  //   //     <h4 className="text-uppercase">Payment Details</h4>
  //   //     <form className="" onSubmit={handleSubmit}>
  //   //       <div className="form-group">
  //   //         {" "}
  //   //         <label for="name" className="text-uppercase">
  //   //           name on the card
  //   //         </label>{" "}
  //   //         <input type="text" className="form-control" />{" "}
  //   //       </div>
  //   //       <div className="form-group">
  //   //         {" "}
  //   //         <label for="card" className="text-uppercase">
  //   //           card number
  //   //         </label>
  //   //         {/* <div className="card-number"> */}{" "}
  //   //         {/* <input
  //   //           type="text"
  //   //           className="form-control"
  //   //           step="4"
  //   //           placeholder="1234 4567 5869 1234"
  //   //           pattern="^[0-9].{15,}"
  //   //         /> */}
  //   //         {/* <input className="FormGroup" style={{ width: 5 + "rem" }}>
  //   //           <div className="FormRow">
  //   //             <CardElement options={CARD_OPTIONS} />
  //   //           </div>
  //   //         </input> */}
  //   //         {/* <img
  //   //           src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png"
  //   //           alt=""
  //   //           width="20"
  //   //           height="20"
  //   //         />{" "} */}
  //   //       </div>
  //   //       <div className="d-flex flex-row">
  //   //         {/* <div className="d-flex "> */}
  //   //         <div className="form-group">
  //   //           {" "}
  //   //           <label for="expiry" className="text-uppercase">
  //   //             exp.date
  //   //           </label>{" "}
  //   //           <input
  //   //             type="text"
  //   //             className="form-control"
  //   //             placeholder="03/2020"
  //   //           />{" "}
  //   //           {/* </div> */}
  //   //         </div>
  //   //         <div className="form-group">
  //   //           <label for="cvv" className="text-uppercase">
  //   //             CVV
  //   //           </label>{" "}
  //   //           <input
  //   //             type="password"
  //   //             className="form-control pr-5"
  //   //             maxLength="3"
  //   //             placeholder="123"
  //   //           />{" "}
  //   //         </div>
  //   //       </div>

  //   //       <div className="form-group">
  //   //         {" "}
  //   //         <label for="name" className="text-uppercase">
  //   //           Billing Address
  //   //         </label>{" "}
  //   //         <input type="text" className="form-control" />{" "}
  //   //       </div>
  //   //       {/* <div className="form-inline pt-sm-3 pt-2">
  //   //         {" "}
  //   //         <input type="checkbox" name="address" id="address" />{" "}
  //   //         <label for="address" className="px-sm-1 pl-1 pt-sm-0 pt-2">
  //   //           My billing address is the same as the shipping
  //   //         </label>{" "}
  //   //       </div> */}

  //   //       <div className="my-3">
  //   //         {" "}
  //   //         <input
  //   //           type="submit"
  //   //           value="place your order"
  //   //           className="text-uppercase btn btn-primary btn-block p-3"
  //   //         />{" "}
  //   //       </div>
  //   //       <div id="form-footer">
  //   //         <p>By placing your order, you agree to our</p>
  //   //         <p>
  //   //           <a href="#">privacy notice</a> {"&"} <a href="#">terms of use</a>.
  //   //         </p>
  //   //       </div>
  //   //     </form>
  //   //   </div>
  //   // </>
  // );
}
