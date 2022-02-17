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
import editUser from "./components/editUser";
import users from "./components/users";
import SingleUser from "./components/SingleUser";
import AboutUs from "./components/AboutUs";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";
import auth from "./store/auth";
import Faq from "./components/Faq";
import Order from "./components/Order";
import CreateUser from "./components/CreateUser";

let tempUserId = 1;
//Grab a local storage session
const retrieveId = JSON.parse(localStorage.getItem("guest"));

//let it come into existence
let uuid;

//If session's not there, create a new session
if (!retrieveId) {
  const testId = {
    id: self.crypto.randomUUID(),
  };
  localStorage.setItem("guest", JSON.stringify(testId));
  uuid = testId.id;
}
//If session IS there, set session's id to uuid
else {
  uuid = retrieveId.id;
}

// console.log(uuid, "THIS IS UUID");

//

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, authId } = this.props;

    return (
      <div>
        {/* Temporary route to avoid logging in for home page */}
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route path="/dogs" exact component={allDogs} /> */}
          {/* <Route path="/dogs/:id" component={Dog} /> */}
          {/* <Route path={`/dog/edit/:id`} component={editDog} /> */}
          {/*CHANGE TO USER ID LATER*/}
          {/* <Route exact path={"/users"} component={users} /> */}
          {/* <Route path={`/users/:id`} component={SingleUser} /> */}
          {/* <Route path={"/AboutUs"} component={AboutUs} /> */}
          {/* <Route path={`/cart/${tempUserId}`} component={Cart} /> */}

          {/* <Route path="/home" component={Home} /> */}
          {/*
          <Route path="/dogs/:id" component={Dog} />
          <Route path={`/dog/edit/:id`} component={editDog} /> */}

          {/*CHANGE TO USER ID LATER*/}

          {/* <Route exact path={"/users"} component={users} /> */}
          {/* <Route path={`/users/:id`} component={SingleUser} /> */}
          {/* <Route path={"/AboutUs"} component={AboutUs} /> */}
          {/* <Route path={"/users"} component={users} /> */}

          {/* <Route path={"/user/edit/:id"} component={editUser} /> */}

          {/* <Redirect to="/home" /> */}
        </Switch>
        {/* Temporary route to avoid logging in for home page */}

        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dogs" exact component={allDogs} />
            <Route exact path={"/users"} component={users} />
            <Route path={`/users/:id`} component={SingleUser} />
            <Route path="/dogs/:id" component={Dog} />
            <Route path={"/AboutUs"} component={AboutUs} />
            <Route path={`/account/orders/:id`} component={Order} />
            <Route path={`/cart/${authId}`} component={Cart} />
            <Route path={`/checkout/${authId}`} component={Checkout} />
            <Route path={`/dog/edit/:id`} component={editDog} />
            <Route path="/FAQ" component={Faq} />
            <Route path={`/dog/edit/:id`} component={editDog} />
            <Route path={`/confirmation`} component={Confirmation} />
            <Route path={"/user/edit/:id"} component={editUser} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dogs" exact component={allDogs} />
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path={"/users"} component={users} />
            {/* users & users/:id eventually going to be admin view */}

            <Route path={`/users/:id`} component={SingleUser} />
            <Route path={`/dogs/:id`} component={Dog} />
            <Route path={`/dog/edit/:id`} component={editDog} />
            <Route path={"/AboutUs"} component={AboutUs} />
            <Route path={`/cart/${authId}`} component={Cart} />
            <Route path="/FAQ" component={Faq} />

            <Route path="/create" component={CreateUser} />

            <Route path={`/confirmation`} component={Confirmation} />

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
    authId: state.auth.id,
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
