//!CURRENTLY NOT WORKING

import React, { Component } from "react";
import { connect } from "react-redux";

class SingleUser extends Component {
  constructor() {
    super();
  }
  render() {
    const { imageUrl, email, orders } = this.props.user;
    console.log(this.props.user)

    return (
      <>
        <h1>SINGLE USER PAGE// ADMIN VIEW ONLY</h1>
        <ul id="userCard"></ul>

        <ul id="individualCards">
          <li>
            <img src={imageUrl}></img>
          </li>
          <li> EMAIL: {email}</li>
          <li>
            ORDERS:
            {orders ? orders.map(order => {
              console.log(order)
              return (
                <div id="dogCards" key={order.id}>
                    <li key={order.id}>
                      <ul id="individualCards">
                        <li>
                          <img src={order.pet.imageUrl} />
                        </li>
                        <li>Name: {order.pet.name} </li>
                        <li>Price: ${order.pet.price} </li>
                        <li>Ordered Date: {require('moment')(order.createdAt).format('YYYY-MM-DD')}</li>
                        <li></li>
                      </ul>
                    </li>
                  )
                </div>
              )
            }) : "NO ORDERS YET"}{" "}
          </li>
        </ul>
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
