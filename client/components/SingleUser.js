//!CURRENTLY NOT WORKING

import React, { Component } from "react";
import { connect } from "react-redux";

class SingleUser extends Component {
  constructor() {
    super();
  }
  render() {
    const { imageUrl, email, orders } = this.props.user;
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
            {/* {this.props.user ? this.props.user.orders : "NO ORDERS YET"}{" "} */}
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
