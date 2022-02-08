//!ADMIN VIEW ONLY
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadUsers } from "../store/users/users";

class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h2>USERS PAGE</h2>
      </>
    );
  }
}

const mapState = ({ users }) => {
  return { users };
};

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
  };
};

export default connect(mapState, mapDispatch)(Users);
