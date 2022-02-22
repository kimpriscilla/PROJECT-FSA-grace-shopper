import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import auth from "./store/auth";
import { me } from "./store";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
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
import Faq from "./components/Faq";
import Order from "./components/Order";
import Breed from "./components/Breed";
import SelectedBreed from "./components/SelectedBreed";
import CreateUser from "./components/CreateUser";
import AddDog from "./components/AddDog";
import DataPortal from "./components/dataPortal";
import Analytics from './components/Analytics';
import AdminEditDogs from "./components/AdminEditDogs";
import AdminEditUsers from "./components/AdminEditUsers";

const retrieveId = JSON.parse(localStorage.getItem("guest"));
if (!retrieveId) {
  const testId = {
    id: self.crypto.randomUUID(),
  };
  localStorage.setItem("guest", JSON.stringify(testId));
}

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, authId, authRole } = this.props;
    console.log(this.props);
    return (
      <div>
        {/*//! for guest, not logged in */}
        {!isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dogs" exact component={allDogs} />
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/login" component={Login} />
            {/* <Route path="/signup" component={Signup} /> */}
            <Route path={`/dogs/:id`} component={Dog} />
            <Route path={"/AboutUs"} component={AboutUs} />
            <Route path={`/cart/guest`} component={Cart} />
            <Route path="/FAQ" component={Faq} />
            <Route path="/create" component={CreateUser} />
            <Route path={`/checkout/guest`} component={Checkout} />
            <Route path={`/confirmation`} component={Confirmation} />
            <Route exact path={"/breed"} component={Breed} />
            <Route path={`/breed/:id`} component={SelectedBreed} />
          </Switch>
        ) : // ! for logged in users
        authRole === "user" ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dogs" exact component={allDogs} />
            <Route path={`/users/:id`} component={SingleUser} />
            <Route path="/dogs/:id" component={Dog} />
            <Route path={"/AboutUs"} component={AboutUs} />
            <Route path={`/account/orders/:id`} component={Order} />
            <Route path={`/cart/${authId}`} component={Cart} />
            <Route path={`/checkout/${authId}`} component={Checkout} />
            <Route path="/FAQ" component={Faq} />
            <Route path={`/confirmation`} component={Confirmation} />
            <Route path={`/user/edit/`} component={editUser} />
            <Route exact path={"/breed"} component={Breed} />
            <Route path={`/breed/:id`} component={SelectedBreed} />
            <Route path="/addDog" component={AddDog} />
            <Route path={`/dog/edit/:id`} component={editDog} />
            <Redirect to="/home" />
          </Switch>
        ) : (
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
            <Route exact path={"/breed"} component={Breed} />
            <Route path={"/dataportal"} component={DataPortal} />
            <Route path={`/breed/:id`} component={SelectedBreed} />
            <Route path="/addDog" component={AddDog} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/manageDogs" component={AdminEditDogs} />
            <Route path="/manageUsers" component={AdminEditUsers} />
            <Route path="/create" component={CreateUser} />
            <Redirect to="/home" />
          </Switch>
        )}
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    authId: state.auth.id,
    authRole: state.auth.role,
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
