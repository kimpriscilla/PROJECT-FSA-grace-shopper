import React from "react";
import { connect } from "react-redux";
import { logout } from "../store";
import Fixed from "./fixedNav";
import LoginNav from "./LoginNav";
import { getCart } from "../store/cart/cart";
import AdminNav from "./AdminNav";

//temporary navBar without loggedIn function/difference
const tempUserId = 1;

const Navbar = ({ handleClick, isLoggedIn, authId, cart, authRole }) => (
  <div>
    <div>
      <nav
        className="navbar sticky-top navbar-light bg-light"
        id="sticky-nav"
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
          <span style={{ fontWeight: "bold" }}> Grace Barker</span>
        </div>

        <div>
          <ul className="nav justify-content-end ">
            <li className="nav-item">
              <a
                className=" nav-link active"
                aria-current="page"
                href="/ContactUs"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item text-center">
              <a
                className="nav-link active"
                aria-current="page"
                href={`/cart/${authId ? authId : "guest"}`}
              >
                <div className=" h5">
                  <i className="bi- bi-cart-fill"></i> ({cart.length})
                  {/* ({console.log(cart.length)}) */}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {isLoggedIn ? (
        <LoginNav
          handleClick={handleClick}
          isLoggedIn={isLoggedIn}
          id={authId}
          authRole={authRole}
        />
      ) : (
        <Fixed handleClick={handleClick} isLoggedIn={isLoggedIn} />
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
    cart: state.cartItems || {},
    authRole: state.auth.role,
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
