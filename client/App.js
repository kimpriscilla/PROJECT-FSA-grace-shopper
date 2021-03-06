import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "./store/users/users";
import { loadPets } from "./store/pets/pets";
import { getCart } from "./store/cart/cart";
import { getOrders } from "./store/order/order";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";
import { me } from "./store/auth";
import { getBreeds } from "./store/pets/breeds";
import { getBreedSales } from "./store/analytics/analytics";
import { getStateOrders } from "./store/analytics/stateOrders";

let tempUserId = 1;

class _App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.authId,
    };
  }
  async componentDidMount() {
    this.props.loadUsers();
    this.props.loadPets();
    this.props.getCart();
    this.props.me();
    this.props.getBreeds();
    this.props.getBreedSales();
    this.props.getStateOrders();
    this.state.userId && this.props.getCart(this.state.userId);
  }

  render() {
    return (
      <div id="page-container">
        <div id="content-wrap">
          <Navbar />
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    loadPets: () => {
      dispatch(loadPets());
    },
    getCart: (userId) => dispatch(getCart(userId)), //on a hard reload, userId is undefined.

    getCart: (userId) => dispatch(getCart(userId)),

    getOrders: (userId) => dispatch(getOrders(userId)),
    me: () => {
      dispatch(me());
    },
    getBreeds: () => dispatch(getBreeds()),
    getBreedSales: () => dispatch(getBreedSales()),
    getStateOrders: () => dispatch(getStateOrders()),
  };
};

const App = connect(null, mapDispatch)(_App);

export default App;
