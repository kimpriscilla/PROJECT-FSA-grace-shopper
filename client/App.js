import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "./store/users/users";
import { loadPets } from "./store/pets/pets";
import { getCart } from "./store/cart/cart";
import { me } from "./store/auth";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

let tempUserId = 1;

class _App extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    this.props.loadUsers();
    this.props.loadPets();
    this.props.getCart(tempUserId);
    this.props.me();
  }
  render() {
    // console.log(this.props);
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
  // console.log("INSIDE APP", state);
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
    me: () => {
      dispatch(me());
    },
  };
};

const App = connect(mapState, mapDispatch)(_App);

export default App;
