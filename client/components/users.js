//!ADMIN VIEW ONLY
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadUsers } from "../store/users/users";

class Users extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    // console.log("users--->", this.props.users);
    return (
      <>
        <h2>USERS PAGE</h2>
        <h2> ADMIN VIEW ONLY, CURRENT USERS:</h2>
        <ul id="userCards">
          {this.props.users.map((user) => (
            <li key={user.id}>
              <ul id="individualCards">
                <li>
                  <img src={user.imageUrl} />
                </li>
                <li>Email: {user.email}</li>
              </ul>
              <Link to={`/users/${user.id}`}>More Details</Link> |
              <Link to={`/user/edit/${user.id}`}> Edit User</Link>
            </li>
          ))}
        </ul>
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
