import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../store/users/users";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      imageUrl: "",
      email: "",
      password: "",
    });
  }
  render() {
    const { imageUrl, email, password } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <>
        <form onSubmit={onSubmit}>
          <h5>Register</h5>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    value={imageUrl}
                    name="imageUrl"
                    onChange={onChange}
                    placeholder="Image Url"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={email}
                    name="email"
                    onChange={onChange}
                    placeholder="email"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={password}
                    name="password"
                    onChange={onChange}
                    placeholder="password"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button>Create</button>
        </form>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user));
    },
  };
};

export default connect(null, mapDispatch)(CreateUser);
