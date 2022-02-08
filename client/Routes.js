import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import allDogs from "./components/allDogs";
import Dog from "./components/Dog";
import editDog from "./components/editDog";
import Users from "./components/users";
// import loadUsers from "./store/users/users";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  async componentDidMount() {
    this.props.load_Users();
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
          <Route path="/users" component={Users} />
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
    // load_Users: () => {
    //   dispatch(loadUsers());
    // },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
