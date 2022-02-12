import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import Sticky from "./stickyNav";

//temporary navBar without loggedIn function/difference
const tempUserId = 1;

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#F0FFFF", height: 50 + "px" }}
      >
        <div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-sm btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <a href="/" className="navbar-brand" />
          Grace Barker
        </div>

        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <Sticky />

    {/* <div>
      <nav className="navbar sticky-top"  style={{ backgroundColor: "#FFF8DC" }}>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/home" className="navbar-brand">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar-brand "
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-expanded="false"
              >
                Dogs
              </a>
              <ul className="dropdown-menu navbar-brand">
                <li>
                  <a className="dropdown-item" href="/dogs">
                    Available Dogs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item navbar-brand" href="/">
                    Featured Dogs
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link navbar-brand">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a
                className="nav-link active navbar-brand"
                aria-current="page"
                href="/users"
              >
                Users
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active navbar-brand"
                aria-current="page"
                href="/home"
              >
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div> */}
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
