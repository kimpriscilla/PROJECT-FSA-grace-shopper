import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../store/users/users";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "/default.png",
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
    const { email, password } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-body">
                    <h1 style={{ fontFamily: "dosis", fontWeight: 400 }}>
                      Create Account
                    </h1>
                    <p
                      className="text-muted"
                      style={{ fontFamily: "dosis", fontWeight: 400 }}
                    >
                      One step closer to meeting your best bud!
                    </p>
                    <form onSubmit={onSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-addon">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          style={{ fontFamily: "dosis", fontWeight: 400 }}
                          type="text"
                          className="form-control"
                          value={email}
                          name="email"
                          onChange={onChange}
                          placeholder="Email"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <i className="fa fa-lock"></i>
                        </span>

                        <input
                          style={{ fontFamily: "dosis", fontWeight: 400 }}
                          type="password"
                          className="form-control"
                          value={password}
                          name="password"
                          onChange={onChange}
                          placeholder="Password"
                        />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button
                            type="submit"
                            className="btn btn-outline-warning btn-lg rounded-pill"
                          >
                            <span style={{ fontWeight: "bold" }}> SIGN UP</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <img
                  className="card text-white py-15 d-md-down-none mb-9"
                  src={"dog3.jpg"}
                  style={{
                    width: 30 + "vh",
                    height: 30 + "vw",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
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
