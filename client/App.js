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

let tempUserId = 1;

class _App extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.loadUsers();
    this.props.loadPets();
    this.props.me();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
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
    getCart: (userId) => dispatch(getCart(userId)),
    getOrders: (userId) => dispatch(getOrders(userId)),
    me: () => {
      dispatch(me());
    },
  };
};

const App = connect(mapState, mapDispatch)(_App);

export default App;
