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
        <div>
          <Link to={`/dog/edit/${pet.id}`}>
            <button className="button-37" role="button">
              Edit {pet.name}
            </button>
          </Link>
          <h1>Meet {pet.name}!</h1>
          <img src={pet.imageUrl}></img>
          <p>Sex: {pet.gender}</p>
          <p>Age: {pet.dob} (come back to calculation later)</p>
          <p>Size: {pet.size}</p>
          <p>Price: ${pet.price}</p>
          <p>Breed: {pet.breed.name}</p>
          <p>{pet.description}</p>
          <button
            className="button-37"
            role="button"
            onClick={() => this.props.addCart(authId, pet.id)}
          >
            Add to Cart
          </button>
        </div>
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
