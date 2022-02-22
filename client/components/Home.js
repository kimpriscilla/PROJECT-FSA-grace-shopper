import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  if (props) {
    console.log(props);
  }

  return (
    <>
      {" "}
      <div>
        <h2>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="dog0.jpg"
                  className="d-block w-100"
                  style={{
                    width: 200 + "%",
                    height: 900 + "px",
                    objectFit: "cover",
                    objectPosition: 50 + "%" + 50 + "%",
                  }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1
                    id="graceBarkerHome"
                    style={{
                      fontSize: 300 + "%",
                      fontWeight: 800,
                      fontFamily: "dosis",
                      color: "#FFF8DC",
                      webkitTextStroke: "black " + 2 + "px",
                    }}
                  >
                    GRACE BARKER
                  </h1>
                  <h2
                    style={{
                      fontSize: 200 + "%",
                      fontWeight: 800,
                      fontFamily: "dosis",
                      color: "#FFF8DC",
                      webkitTextStroke: "black " + 2 + "px",
                    }}
                  >
                    Be a bud to our buds!
                  </h2>

                  <a
                    href="/dogs
                  "
                  >
                    <button
                      type="button"
                      class="btn btn-warning btn-lg rounded-pill"
                    >
                      <span style={{ fontWeight: "bold" }}> EXPLORE </span>
                    </button>
                  </a>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="dog.jpg"
                  style={{
                    width: 200 + "%",
                    height: 900 + "px",
                    objectFit: "cover",
                    objectPosition: 50 + "%" + 50 + "%",
                  }}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1
                    style={{
                      fontSize: 250 + "%",
                      fontWeight: 800,
                      fontFamily: "dosis",
                      color: "#FFF8DC",
                      webkitTextStroke: "black " + 2 + "px",
                    }}
                  >
                    SHOP BY BREED
                  </h1>

                  <a href="/breed">
                    <button
                      type="button"
                      class="btn btn-outline-warning btn-lg rounded-pill"
                    >
                      <span style={{ fontWeight: "bold" }}> EXPLORE </span>
                    </button>
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="dog2.jpg"
                  style={{
                    width: 200 + "%",
                    height: 900 + "px",
                    objectFit: "cover",
                    objectPosition: 50 + "%" + 50 + "%",
                  }}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1
                    style={{
                      fontSize: 250 + "%",
                      fontWeight: 800,
                      fontFamily: "dosis",
                      color: "#FFF8DC",
                      webkitTextStroke: "black " + 2 + "px",
                    }}
                  >
                    CUDDLY FRIENDLY DOGS
                  </h1>
                  <p
                    style={{
                      fontSize: 100 + "%",
                      fontWeight: 800,
                      fontFamily: "dosis",
                      color: "#FFF8DC",
                      webkitTextStroke: "black " + 2 + "px",
                    }}
                  >
                    FOR SALE
                  </p>

                  <a href="/breed">
                    <button
                      type="button"
                      class="btn btn-outline-warning btn-lg rounded-pill"
                    >
                      <span style={{ fontWeight: "bold" }}> EXPLORE </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="dog1.jpg"
                  style={{
                    width: 200 + "%",
                    height: 900 + "px",
                    objectFit: "cover",
                    objectPosition: 50 + "%" + 50 + "%",
                  }}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1
                    style={{
                      fontSize: 250 + "%",
                      fontWeight: 800,
                      fontFamily: "dosis",
                      color: "#FFF8DC",
                      webkitTextStroke: "black " + 2 + "px",
                    }}
                  >
                    Pup, pup, hooray!
                  </h1>

                  <a href="/dogs">
                    <button
                      type="button"
                      class="btn btn-outline-warning btn-lg rounded-pill"
                    >
                      <span style={{ fontWeight: "bold" }}> EXPLORE </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </h2>
      </div>
      <section className="p-5">
        <div className="container">
          <h2>
            <p className="text-center">
              {" "}
              <span style={{ fontWeight: "bold" }}> EASY PROCESS </span>
            </p>
          </h2>
          <div className="row text-center">
            <div className="col-md">
              <img src={"process.png"} />
              <h2>
                <div
                  className="p-5"
                  style={{ fontFamily: "dosis", fontWeight: 600 }}
                >
                  {" "}
                  CREATE AN ACCOUNT OR LOG IN
                </div>
              </h2>
            </div>
            <div className="col-md">
              {" "}
              <img src={"process.png"} />
              <h2>
                <div
                  className="p-5"
                  style={{
                    fontFamily: "dosis",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  SEARCH FOR DESIRED DOG
                </div>
              </h2>
            </div>
            <div className="col-md">
              {" "}
              <img src={"process.png"} />
              <h2>
                <div
                  className="p-5"
                  style={{ fontFamily: "dosis", fontWeight: 600 }}
                >
                  {" "}
                  EASY CHECKOUT & SHIPPING
                </div>
              </h2>
            </div>
          </div>
        </div>
        {/* <SearchBar /> */}
      </section>
    </>
  );
};

export default Home;
