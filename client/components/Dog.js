import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/cart/cart";

let tempUserId = 1;

class Dog extends React.Component {
  constructor() {
    super();
  }

  calculateAge(dob) {
    // dob is a date
    let dob1 = Date.parse(dob);
    console.log(dob1);
    var ageDifMs = Date.now() - dob1.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

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
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{pet.name}</h3>
                <h6 className="card-subtitle">{pet.breed.name}</h6>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center">
                      <img src={pet.imageUrl} className="img-responsive" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Meet {pet.name}!</h4>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Age:</span> {pet.dob}{" "}
                      (come back to calculation later)
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Sex:</span>{" "}
                      {pet.gender}
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Size:</span>{" "}
                      {pet.size}
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Price:</span> $
                      {pet.price}
                    </p>
                    <p>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Breed:</span>{" "}
                      {pet.breed.name}
                    </p>
                    <h2 className="mt-5">
                      $ {pet.price}
                      <small className="text-success"></small>
                    </h2>

                    <button
                      classNameName="button-37"
                      role="button"
                      onClick={() => this.props.addCart(authId, pet.id)}
                    >
                      {" "}
                      Add to Cart
                    </button>
                    <h3 className="box-title mt-5">Key Highlights</h3>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-check text-success"></i>Testing
                      </li>
                      <li>
                        <i className="fa fa-check text-success"></i>Testing
                      </li>
                      <li>
                        <i className="fa fa-check text-success"></i>Testing
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <p>testinggggg</p>
                    <p>
                      {" "}
                      <Link to={`/dog/edit/${pet.id}`}>
                        <button classNameName="button-37" role="button">
                          Edit {pet.name}
                        </button>
                      </Link>
                    </p>
                  </div>
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
