import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    // <>
    //   <div>
    //     <form onSubmit={handleSubmit} name={name}>
    //       <div>
    //         <label htmlFor="email">
    //           <small>Username</small>
    //         </label>
    //         <input name="email" type="text" />
    //       </div>
    //       <div>
    //         <label htmlFor="password">
    //           <small>Password</small>
    //         </label>
    //         <input name="password" type="password" />
    //       </div>
    //       <div>
    //         <button type="submit">{displayName}</button>
    //       </div>
    //       {error && error.response && <div> {error.response.data} </div>}
    //     </form>
    //   </div>
    // </>

    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <form onSubmit={handleSubmit} name={name}>
                    <div className="input-group mb-3">
                      <span className="input-group-addon">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon">
                        <i className="fa fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        {/* <button type="button" className="btn btn-primary px-4">
                          Login
                        </button> */}
                        <button type="submit">{displayName}</button>
                      </div>
                      {error && error.response && (
                        <div> {error.response.data} </div>
                      )}
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

              {/* <div className="card-body text-center"> */}
              {/* <div>
                  <img
                    src={"/dog.jpg"}
                    style={{
                      width: 30 + "vh",
                      height: 20 + "vw",
                      objectFit: "cover",
                    }}
                  /> */}
              {/* <img src={"dog.jpg"} style={{ width: 33 + "%" }} /> */}

              {/* <button
                      type="button"
                      className="btn btn-primary active mt-3"
                    >
                      Register Now!
                    </button> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
