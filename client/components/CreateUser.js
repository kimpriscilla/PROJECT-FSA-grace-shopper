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
    const { email, password } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <>
        {/* <div id="main-wrapper" className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="mb-5">
                          <h3 className="h4 font-weight-bold text-theme">
                            Create Account
                          </h3>
                        </div>
                        <h6 className="h5 mb-0">Create Account</h6>
                        <p className="text-muted mt-1 mb-2">
                          One step closer to meeting your best bud!
                        </p>
                        <form onSubmit={onSubmit}>
                          {/* <div className="form-group">
                            <label htmlFor="yourName">Image URL</label>
                            <input
                              value={imageUrl}
                              name="imageUrl"
                              onChange={onChange}
                            />
                          </div> */}
        {/* <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              value={email}
                              name="email"
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-group mb-5">
                            <label htmlFor="exampleInputPassword1">
                              Password
                            </label>
                            <input
                              value={password}
                              name="password"
                              onChange={onChange}
                            />
                          </div>
                          <p>
                            <button type="submit" className="btn btn-theme">
                              Register
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right">
                        <div className="overlay rounded-right"></div>
                        <div className="account-testimonial">
                          <h4 className="text-white mb-4">
                            This beautiful theme yours!
                          </h4>
                          <p className="lead text-white">
                            "Best investment i made for a long time. Can only
                            recommend it for other users."
                          </p>
                          <img
                            src="/dog.jpg"
                            style={{ width: 400 + "px", height: 400 + "px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted text-center mt-3 mb-0">
                Already have an account?{" "}
                <a href="/login" className="text-primary ml-1">
                  LOGIN
                </a>
              </p>
            </div>
          </div>
        </div>
        */}

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
