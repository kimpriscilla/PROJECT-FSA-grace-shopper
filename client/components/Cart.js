import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/cart/cart";
import { Link } from "react-router-dom";

let tempUserId = 1;
let tempOrderId = 5;

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userId: JSON.parse(localStorage.getItem("guest")).id, //CHANGE USER ID LATER
      //Maybe something that checks if a session or cookie exist. If so, check for userId and set the state's userID to the cookie's stored userID.

      //ERROR: Does not work atm because the UUID obviously doesn't match a user in the database

      //Consideration: How to have a post route that checks if the user exist and if it doesn't....Do something? Idk

      //Also if the user is logged in, maybe have something here that checks isLoggedIn and if so, grab the userId from isLoggedIn.
      totalPrice: 0,
    };
  }

  render() {
    console.log(this.state, "This is state");
    const cartItems = this.props.cartItems;
    return (
      <div>
        <ul id="dogCards">
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <ul id="individualCards">
                <li>
                  <img src={cartItem.pet.imageUrl} />
                </li>
                <li>Name: {cartItem.pet.name} </li>
                <li>Price: ${cartItem.pet.price} </li>
                <li></li>
                <button
                  className="button-37"
                  role="button"
                  onClick={() =>
                    this.props.deleteCart(this.state.userId, cartItem.id)
                  }
                >
                  Remove
                </button>
              </ul>
            </li>
          ))}
        </ul>
        <Link to={`/${tempUserId}/${tempOrderId}`}>
          <button className="button-37" role="button">
            Checkout
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCart: (userId, cartItemId) =>
      dispatch(deleteCart(userId, cartItemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
