import React from "react";

const Footer = () => (
  <>
    <footer
      id="footer"
      style={{ backgroundColor: "cornsilk", fontFamily: "dosis" }}
    >
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/home"
                style={{ fontWeight: "bold", color: "brown" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/dogs"
                style={{ fontWeight: "bold", color: "brown" }}
              >
                Shop Dogs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/ContactUs"
                style={{ fontWeight: "bold", color: "brown" }}
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
