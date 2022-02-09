import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUsers } from "./store/users/users";
import { loadPets } from "./store/pets/pets";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

// class _App extends Component {
//   constructor() {
//     super();
//   }
//   async componentDidMount() {
//     this.props.loadUsers();
//     this.props.loadPets();
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <Navbar />
//         <Routes />
//       </div>
//     );
//   }
// }

// const mapState = (state) => {
//   return state;
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadUsers: () => {
//       dispatch(loadUsers);
//     },
//     loadPets: () => {
//       dispatch(loadPets);
//     },
//   };
// };

// const App = connect(mapState, mapDispatch)(_App);

export default App;
