import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ({ handleClick, isLoggedIn }) => (
  <>
    <div>
      <nav
        className=" navbar fixed-top navbar-expand-sm scrolling-navbar"
        style={{ backgroundColor: "#FFF8DC" }}
      >
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link"
                style={{ fontWeight: "bold", color: "brown" }}
              >
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
                style={{ fontWeight: "bold", color: "brown" }}
              >
                Dogs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/dogs"
                    style={{ fontWeight: "bold", color: "brown" }}
                  >
                    Available Dogs
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/breed"
                    style={{ fontWeight: "bold", color: "brown" }}
                  >
                    Breed
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-link"
                style={{ fontWeight: "bold", color: "brown" }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-expanded="false"
                style={{ color: "red", fontWeight: "bold" }}
              >
                Admin
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/manageDogs"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    Manage Dogs
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/manageUsers"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    Manage Users
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/analytics"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    Analytics
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-expanded="false"
                style={{ fontWeight: "bold", color: "brown" }}
              >
                My Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                    style={{ fontWeight: "bold", color: "brown" }}
                  >
                    Account
                  </a>
                </li>

                <li>
                  {isLoggedIn ? (
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/home"
                      onClick={handleClick}
                      style={{ fontWeight: "bold", color: "brown" }}
                    >
                      Log Out
                    </a>
                  ) : (
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                      style={{ fontWeight: "bold", color: "brown" }}
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

export default AdminNav;
