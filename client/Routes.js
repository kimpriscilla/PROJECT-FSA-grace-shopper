import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import allDogs from "./components/allDogs";
import Dog from "./components/Dog";
import editDog from "./components/editDog";
import Cart from "./components/Cart";
<<<<<<< HEAD
import editUser from "./components/editUser";
=======
import users from "./components/users";
>>>>>>> 4f2f39baaef77c0c01ca24bffdaf65a85bf24b0b

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {/* Temporary route to avoid logging in for home page */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/dogs" exact component={allDogs} />
          <Route path="/dogs/:id" component={Dog} />
          <Route path={`/dog/edit/:id`} component={editDog} />
<<<<<<< HEAD
          <Route path={`/user/edit/:id`} component={editUser} />
          <Route path={"/cart"} component={Cart} />
=======
          <Route path={"/cart"} component={Cart} />
          <Route path={"/users"} component={users} />
>>>>>>> 4f2f39baaef77c0c01ca24bffdaf65a85bf24b0b
          <Redirect to="/home" />
        </Switch>
        {/* Temporary route to avoid logging in for home page */}

        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
