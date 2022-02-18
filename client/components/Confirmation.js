import React from "react";
import { connect } from "react-redux";
import { getOrders } from "../store/order/order";

class Confirmation extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    if (this.props.orders.length < 1) {
      return <h1>Loading order...</h1>;
    } else {
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
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //getOrders: (userId) => dispatch(getOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
