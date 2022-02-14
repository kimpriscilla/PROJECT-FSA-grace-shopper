import React from "react";
import { connect } from "react-redux";
import { logout } from "../store";
import Sticky from "./stickyNav";
import LoginNav from "./LoginNav";

//temporary navBar without loggedIn function/difference
const tempUserId = 1;

const Navbar = ({ handleClick, isLoggedIn, authId }) => (
  <div>
    <div>
      <nav
        className="navbar sticky-top navbar-light bg-light"
        style={{ backgroundColor: "#F0FFFF" }}
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
              <a
                className="nav-link active"
                aria-current="page"
                href={`/cart/${tempUserId}`}
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* --------------------------------------------------- */}
      {isLoggedIn ? (
        <LoginNav
          handleClick={handleClick}
          isLoggedIn={isLoggedIn}
          id={authId}
        />
      ) : (
        <Sticky handleClick={handleClick} isLoggedIn={isLoggedIn} id={null} />
      )}
    </div>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    authId: state.auth.id,
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
