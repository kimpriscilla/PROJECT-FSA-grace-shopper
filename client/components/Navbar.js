import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

//temporary navBar without loggedIn function/difference
const tempUserId = 1;

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Welcome to Bark Hopper! </h1>
    <nav>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/home">About Us</Link>
        <Link to={`/cart/${tempUserId}`}>Cart</Link> {/*CHANGE TO USER ID LATER*/}
        <Link to="/users">Users</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    </nav>
    <hr />
  </div>
);

// const Navbar = ({ handleClick, isLoggedIn }) => (
//   <div>
//     <h1>Grace Barker: Dogs for Sale </h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// );

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
