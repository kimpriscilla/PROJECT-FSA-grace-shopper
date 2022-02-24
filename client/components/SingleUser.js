import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleUser extends Component {
  constructor() {
    super();
  }
  render() {
    const { imageUrl, email, orders, id } = this.props.user;
    return (
      <>
        <div style={{ fontFamily: "dosis" }}>
          <h1 className="text-center">Account Details</h1>
          <ul id="userCard"></ul>
          <ul id="individualCards">
            <Link to={"/user/edit/"}> Edit User</Link>
            <li>
              <img src={imageUrl}></img>
            </li>
            <li> EMAIL: {email}</li>
            <div>
              Pets:
              {orders
                ? orders.map((order) => {
                    return order.cart_items.map((cartItem) => {
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
                          </ul>
                        </li>
                      );
                    });
                  })
                : "No Orders Yet"}
            </div>
          </ul>
        </div>
      </>
    );
  }
}

const mapState = (state, ownProps) => {
  const user =
    state.users.find((user) => user.id === ownProps.match.params.id * 1) || {};

  return {
    user,
    ownProps,
  };
};

export default connect(mapState, null)(SingleUser);
