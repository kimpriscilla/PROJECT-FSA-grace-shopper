import React, { useRef } from "react";
import { connect } from "react-redux";
import { getOrders } from "../store/order/order";
import emailjs from "@emailjs/browser";

class Confirmation extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.orders.length < 1) {
      return <h1>Loading order...</h1>;
    } else {
      /*This section is for the automatic email confirmation*/
      const stuff = this.props.orders[0].cart_items;
      const justPrice = stuff.map((e) => e.pet.price);
      const total = justPrice.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      const d = new Date();
      if (this.props.email) {
        const templateParams = {
          from_name: "Grace Barker",
          to_name: this.props.email,
          to_email: this.props.email,
          orderDate: `${d}`,
          total: `$${total}.00`,
        };
        emailjs.send(
          "service_p2kt39t",
          "template_2kjrixe",
          templateParams,
          "user_w4BQ3Zi1y4LNQaYgylatf"
        );
      }
      /*Final line of automatic email confirmation code*/

      return (
        <div>
          <h1>Order Placed!</h1>
          <ul id="dogCards">
            {this.props.orders.map((order) => {
              let cartItems = order.cart_items;
              return (
                <div id="dogCards" key={order.id}>
                  {cartItems.map((cartItem) => {
                    return (
                      <li key={cartItem.id}>
                        <ul id="individualCards">
                          <li>
                            <img src={cartItem.pet.imageUrl} />
                          </li>
                          <li>Name: {cartItem.pet.name} </li>
                          <li>Price: ${cartItem.pet.price} </li>
                          <li>
                            Ordered Date:{" "}
                            {require("moment")(order.createdAt).format(
                              "YYYY-MM-DD"
                            )}
                          </li>
                          <li></li>
                        </ul>
                      </li>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orders,
    email: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //getOrders: (userId) => dispatch(getOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
