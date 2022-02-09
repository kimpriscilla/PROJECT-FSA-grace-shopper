import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

//temporary navBar without loggedIn function/difference
const Navbar = ({ handleClick, isLoggedIn }) => (
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

      {/* SEARCH BAR 2 */}
      {/* <div>
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            {/* sizing of search bar */}
      {/* <div className="col-lg-10">
              <div className="form">
                {" "}
                <i className="fa fa-search"></i>{" "}
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Doesnt work yet"
                />{" "}
                <span className="left-pan">
                  <i className="fa fa-microphone"></i>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <a href="/" className="navbar-brand">
          Grace Barker
        </a>
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

    <nav
      className=" nav navbar-expand-sm"
      style={{ backgroundColor: "#FFF8DC" }}
    >
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Dogs
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dogs">
                  Available Dogs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Featured Dogs
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/AboutUs" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/users">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </nav>
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
