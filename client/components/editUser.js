import React, { Component } from "react";

import { connect } from "react-redux";
import { loadUsers, changeUser } from "../store/users/users";

class editUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id * 1,
      imageUrl: "",
      password: "",
      email: "",
    };
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props._editUser(this.state);
  };

  componentDidMount = async () => {
    this.props._loadUsers();
  };

  render() {
    const { email, password, imageUrl } = this.state;
    if (this.props.users.length === 0) {
      return <></>;
    }

    const filtered = this.props.users.filter(
      (user) => user.id === this.props.match.params.id * 1
    )[0];

    return (
      <div>
        <div>
          <h3>EDIT USER DETAILS</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>Confirm changes here</td>
              </tr>
              <tr>
                <td>EMAIL</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={this.input}
                    value={email ? email : filtered.email}
                  ></input>
                </td>
                <td>{filtered.email}</td>
              </tr>
              <tr>
                <td>PASSWORD</td>
                <td>
                  <input
                    type="text"
                    name="password"
                    onChange={this.input}
                    value={password ? password : ""}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Image URL </td>
                <td>
                  <input
                    type="text"
                    name="imageUrl"
                    onChange={this.input}
                    value={imageUrl ? imageUrl : filtered.imageUrl}
                  ></input>
                </td>
                <td>{filtered.imageUrl}</td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button
                    type="submit"
                    disabled={
                      this.state.imageUrl === "" || this.state.email === ""
                    }
                  >
                    Save information
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    _loadUsers: () => dispatch(loadUsers()),
    _editUser: (user) => dispatch(changeUser(user)),
  };
};

export default connect(mapState, mapDispatch)(editUser);
