import React from "react";

const Footer = () => (
  <>
    {/* <footer
      className="navbar-sticky-bottom "
      style={{  backgroundColor: "cornSilk"  }}
    >
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/FAQ">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer> */}

    <footer id="footer" style={{ backgroundColor: "cornsilk" }}>
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/FAQ">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
