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
    this.state = {
      userId: props.authId,
    };
  }
  async componentDidMount() {
    this.props.loadUsers();
    this.props.loadPets();
    this.props.getCart();
    this.props.me();
  }

  render() {
    console.log(this.state.me);
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

// const mapState = (state) => {
//   return state;
// };

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    loadPets: () => {
      dispatch(loadPets());
    },
    //getCart: (tempUserId) => dispatch(getCart(tempUserId)), //tempuserId works when logged out, cart items persists.
    getCart: (userId) => dispatch(getCart(userId)), //on a hard reload, userId is undefined.
    getOrders: (userId) => dispatch(getOrders(userId)),
    me: () => {
      dispatch(me());
    },
  };
};

const App = connect(null, mapDispatch)(_App);

export default App;
