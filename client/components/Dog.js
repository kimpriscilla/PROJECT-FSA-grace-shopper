import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/cart/cart";

let tempUserId = 1;

class Dog extends React.Component {
  constructor() {
    super();
  }

  // calculateAge(dob) {
  //   // dob is a date
  //   let dob1 = Date.parse(dob);
  //   //console.log(dob1);
  //   var ageDifMs = Date.now() - dob1.getTime();
  //   var ageDate = new Date(ageDifMs); // miliseconds from epoch
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }

  render() {
    const { pet, authId } = this.props;

    if (!pet) {
      return <h1>Loading Pet!</h1>;
    } else {
      return (
        <>
          {/* <div>
            <Link to={`/dog/edit/${pet.id}`}>
              <button classNameName="button-37" role="button">
                Edit {pet.name}
              </button>
            </Link>
            <h1>Meet {pet.name}!</h1>
            <img src={pet.imageUrl}></img>
            <p classNameName="text-end">Sex: {pet.gender}</p>
            <p>Age: {pet.dob} (come back to calculation later)</p>
            <p>Size: {pet.size}</p>
            <p>Price: ${pet.price}</p>
            <p>Breed: {pet.breed.name}</p>
            <p>{pet.description}</p>
            <button
              classNameName="button-37"
              role="button"
              onClick={() => this.props.addCart(authId, pet.id)}
            >
              Add to Cart
            </button>
          </div> */}
          <a href="/dogs">
            <button
              type="button"
              className="btn btn-outline-warning btn-md rounded-pill"
            >
              <span style={{ fontWeight: "bold" }}> Doggos </span>
            </button>
          </a>
          <div className="container" style={{ fontFamily: "dosis" }}>
            <div className="card">
              <div className="card-body" style={{ backgroundColor: "#FFF8DC" }}>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center">
                      <img src={pet.imageUrl} className="img-responsive" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4
                      className="box-title mt-5"
                      style={{ fontWeight: 600, fontSize: 250 + "%" }}
                    >
                      Meet {pet.name}!
                    </h4>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        <span style={{ fontSize: 120 + "%" }}>
                          Date of Birth:
                        </span>
                      </span>{" "}
                      <span style={{ fontSize: 120 + "%" }}>
                        {pet.dateOfBirth}{" "}
                      </span>
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        <span style={{ fontSize: 120 + "%" }}>Gender:</span>
                      </span>{" "}
                      <span style={{ fontSize: 120 + "%" }}>{pet.gender} </span>
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        <span style={{ fontSize: 120 + "%" }}>Size:</span>
                      </span>{" "}
                      <span style={{ fontSize: 120 + "%" }}>{pet.size} </span>
                    </p>

                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>
                        <span style={{ fontSize: 120 + "%" }}>Breed:</span>
                      </span>{" "}
                      <span style={{ fontSize: 120 + "%" }}>
                        {pet.breed.name}{" "}
                      </span>
                    </p>
                    <h2 className="mt-5">
                      $ {pet.price}
                      <small className="text-success"></small>
                    </h2>

                    <button
                      type="button"
                      className="btn btn-outline-warning btn-md rounded-pill"
                      onClick={() => this.props.addCart(authId, pet.id)}
                    >
                      <span style={{ fontWeight: "bold" }}> ADD TO CART </span>
                    </button>
                    <h3 className="box-title mt-5">Description:</h3>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-check text-success"></i>
                        {pet.description}
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <p>testinggggg</p>
                    <p> </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const petId = ownProps.match.params.id * 1;
  return {
    pet: state.pets.filter((pet) => pet.id === petId)[0],
    authId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (userId, petId) => dispatch(addCart(userId, petId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
