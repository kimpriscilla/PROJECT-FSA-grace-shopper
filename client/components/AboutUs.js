import React from "react";

export const AboutUs = (props) => {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Us</h3>
              <h6 className="theme-color lead">
                Leading dog site in the world
              </h6>
              <p>
                Welcome to Grace Barker. Our purpose is to provide an efficient,
                secure, and informative experience as you find your next fury
                friend. We work with breeders across the United States who are
                licensed through the USDA Animal and Plant Health Inspection
                Services to ensure that safe and ethical guidelines are followed
                throughout the entire process** Our team provides a rewarding
                experience for both beginners and seasoned dog owners alike.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>
                      <span style={{ fontWeight: "bold" }}>Team</span>
                    </label>
                    <p>Jennifer, Priscilla, Kenneth</p>
                  </div>
                  <div className="media">
                    <label>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>EST</span>
                    </label>
                    <p>2022</p>
                  </div>
                  <div className="media">
                    <label>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Address</span>
                    </label>
                    <p>New York, USA</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>E-mail</span>
                    </label>
                    <p>welovedogs@gracebarker.com</p>
                  </div>
                  <div className="media">
                    <label>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Phone</span>
                    </label>
                    <p>820-885-3321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img
                src="/aboutus.png"
                style={{ width: 500 + "px", height: "auto" }}
                title=""
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">
                  500
                </h6>
                <p className="m-0px font-w-600">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  10+
                </h6>
                <p className="m-0px font-w-600">Unique Breeds</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">
                  100+
                </h6>
                <p className="m-0px font-w-600">Dogs</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">
                  Example
                </h6>
                <p className="m-0px font-w-600">Example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
