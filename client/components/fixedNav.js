import React from "react";
import { Link } from "react-router-dom";

const Fixed = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav
      className=" navbar fixed-top navbar-expand-lg"
      id="fixed-nav"
      style={{ backgroundColor: "#FFF8DC" }}
    >
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/home" className="nav-link ">
              <span style={{ fontWeight: "bold" }}> I AM GUEST NAV </span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle "
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Dogs
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item " href="/dogs">
                  Available Dogs
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="/breed">
                  Breeds
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/AboutUs" className="nav-link ">
              About Us
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="/users">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="/create">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <a
                className="nav-link active "
                aria-current="page"
                href="/home"
                onClick={handleClick}
              >
                LogOut
              </a>
            ) : (
              <a className="nav-link active " aria-current="page" href="/login">
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
export default Fixed;
