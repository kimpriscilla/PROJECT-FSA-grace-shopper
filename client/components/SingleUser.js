//!CURRENTLY NOT WORKING

import React, { Component } from "react";
import { connect } from "react-redux";

class SingleUser extends Component {
  constructor() {
    super();
  }
  render() {
    // console.log("--->", this.props.user);
    // console.log("??????", this.props.user.orders);
    return (
      <>
        <h1>SINGLE USER PAGE// ADMIN VIEW ONLY</h1>
        <ul id="userCard"></ul>

        <ul id="individualCards">
          <li>
            <img src={this.props.user.imageUrl}></img>
          </li>
          <li> EMAIL: {this.props.user.email}</li>
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
