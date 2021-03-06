import React, { Component } from "react";

import { connect } from "react-redux";
import { loadUsers, changeUser } from "../store/users/users";

class editUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id * 1,
    };
  }

  input = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    if (!this.state.id) {
      this.setState({ ...this.state, id: this.props.auth.id });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props._editUser(this.state);
  };

  componentDidMount = async () => {
    this.props._loadUsers();
  };

  render() {
    const { email, password, imageUrl, role } = this.state;
    if (this.props.users.length === 0) {
      return <></>;
    }
    const filterValue =
      this.props.auth.role === "user"
        ? this.props.auth.id
        : this.props.match.params.id;
    //console.log(filterValue, "32, editUser, filterValue");
    // console.log(filterValue);

    const filtered = this.props.users.filter(
      (user) => user.id === filterValue * 1
    )[0];

    return (
      <div style={{ fontFamily: "dosis" }}>
        <div>
          <h3 className="text-center" style={{ color: "red" }}>
            EDIT USER DETAILS
          </h3>
        </div>
        <br />

        <div className="container bootstrap snippets bootdey">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <img
                  alt=""
                  style={{ width: 600 + "px" }}
                  title=""
                  className="img-circle img-thumbnail isTooltip"
                  src={imageUrl ? imageUrl : filtered.imageUrl}
                  data-original-title="Usuario"
                />
              </div>

              <div className=" col-md-6">
                <strong>Information</strong>
                <br />

                <hr />
                <div className="table-responsive">
                  <form onSubmit={this.handleSubmit}>
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-user  text-primary"></span>
                              Email
                            </strong>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="email"
                              onChange={this.input}
                              value={email ? email : filtered.email}
                            ></input>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-bookmark text-primary"></span>
                              Password
                            </strong>
                          </td>
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
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              ImageUrl
                            </strong>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="imageUrl"
                              onChange={this.input}
                              value={imageUrl ? imageUrl : filtered.imageUrl}
                            ></input>
                          </td>
                        </tr>
                        {this.props.auth.role === "admin" ? (
                          <tr>
                            <td>
                              <span style={{ fontWeight: "bold" }}>
                                Update Role{" "}
                              </span>
                            </td>
                            <td>
                              <select
                                name="role"
                                value={role}
                                onChange={this.input}
                              >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                              </select>
                            </td>
                          </tr>
                        ) : (
                          <tr></tr>
                        )}
                      </tbody>
                    </table>
                    <button
                      type="submit"
                      className="btn btn-outline-danger btn-md rounded-pill"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
