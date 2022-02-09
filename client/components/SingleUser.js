//!CURRENTLY NOT WORKING

/*
import React, { Component } from "react";
import { connect } from "react-redux";
import loadUsers from "../store/users/users";

class SingleUser extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    console.log("----->", this.props.user ? this.props.user.email : "idk");
    return (
      <>
        <h1>SINGLE USER PAGE// ADMIN VIEW ONLY</h1>
      </>
    );
  }
}

const mapState = (state, ownProps) => {
  const user = state.users.find(
    (user) => user.id === ownProps.match.params.id * 1
  );
  console.log("SINGLE USER--->", user);
  return {
    user,
    ownProps,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
  };
};

export default connect(mapState, mapDispatch)(SingleUser);
*/
