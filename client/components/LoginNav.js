import React from "react";
import { Link } from "react-router-dom";

const LoginNav = ({ handleClick, isLoggedIn, id }) => (
  <>
    <div>
      {/* -------------------------------------- */}
      <nav
        className=" navbar fixed-top navbar-expand-sm scrolling-navbar"
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
                  <a className="dropdown-item" href="/breed">
                    Breed
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/users">
                Users
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href={`/checkout/${id}`}
              >
                Checkout
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-expanded="false"
              >
                My Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Account
                  </a>
                </li>
                <li>
                  <Link to={`/account/orders/${id}`} className="dropdown-item">
                    Orders
                  </Link>
                </li>
                <li>
                  {isLoggedIn ? (
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/home"
                      onClick={handleClick}
                    >
                      Log Out
                    </a>
                  ) : (
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      Log In
                    </a>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </>
);

export default LoginNav;
