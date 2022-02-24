import React, { Component } from "react";

const ContactUs = () => {
  return (
    <>
      <br />
      <br />
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="flex-direction: row">
            <div className="row justify-content-md-center">
              <div className=" col col-md-4">
                <h4
                  style={{
                    fontFamily: "dosis",
                    fontWeight: 400,
                    fontSize: 300 + "%",
                  }}
                >
                  Get In Touch
                </h4>
                <a
                  style={{
                    fontFamily: "dosis",
                    fontSize: 120 + "%",
                  }}
                  title="Phone"
                >
                  {/* <span style={{ fontWeight: "bold" }}> PHONE:</span> */}
                  <i
                    className="bi bi-telephone-outbound-fill"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </a>{" "}
                <a
                  style={{
                    fontFamily: "dosis",
                    fontSize: 120 + "%",
                  }}
                >
                  (820)-885-3321
                </a>
                <br />
                <a
                  style={{
                    fontFamily: "dosis",
                    fontSize: 120 + "%",
                  }}
                >
                  {/* <span style={{ fontWeight: "bold" }}> EMAIL:</span> {""} */}
                  <i
                    className="bi bi-envelope-heart"
                    style={{ fontSize: 28 + "px" }}
                  ></i>{" "}
                  {""} {""}
                </a>
                <a
                  href="mailto:welovedogs@gracebarker.com"
                  style={{
                    fontFamily: "dosis",
                    color: "blue",
                    textDecoration: "underline",
                    fontSize: 120 + "%",
                  }}
                >
                  welovedogs@gracebarker.com
                </a>
              </div>
              <div className="col col-md-4">
                <h4
                  style={{
                    fontFamily: "dosis",
                    fontWeight: 400,
                    fontSize: 300 + "%",
                  }}
                >
                  Our Location
                </h4>
                <address
                  style={{
                    fontFamily: "dosis",
                    fontSize: 120 + "%",
                  }}
                >
                  777 St Marks Ave
                  <br />
                  Brooklyn, NY, 11213
                  <br />
                </address>
              </div>
            </div>
            <br />
            <br />
            {/*  */}
          </div>
          <br />
          <br />
          <div className="row">
            {/* <div className="col-sm-5 "> */}
            <div className="contact-map">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=777%20Saint%20Marks%20Avenue,%20Brooklyn,%20NY+(Grace%20Barker)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                style={{ width: 100 + "%", height: 500 + "px" }}
              ></iframe>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

{
  /* <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=777%20Saint%20Marks%20Avenue,%20Brooklyn,%20NY+(Grace%20Barker)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/truck-gps/">transport gps</a></iframe></div> */
}
