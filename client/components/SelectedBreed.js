import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/cart/cart";

class SelectedBreed extends React.Component {
  render() {
    const pets = this.props.breedPets;

    if (pets.length < 1) {
      return (
        <h1
          className="text-center"
          style={{ fontFamily: "dosis", fontWeight: 600 }}
        >
          Sorry we are out!
        </h1>
      );
    } else {
      return (
        <div>
          <h1
            className="text-center"
            style={{ fontFamily: "dosis", fontWeight: 600 }}
          >
            {pets[0].breed.name}s
          </h1>
          <ul id="dogCards" style={{ fontFamily: "dosis" }}>
            {pets.map((pet) => (
              <li key={pet.id}>
                <ul id="individualCards">
                  <li>
                    <img src={pet.imageUrl} />
                  </li>
                  <li
                    style={{
                      fontFamily: "dosis",
                      fontWeight: "600",
                      fontSize: 150 + "%",
                    }}
                  >
                    <span style={{ fontSize: 25 + "px" }}>{pet.name} </span>
                  </li>
                  <li>
                    {" "}
                    <span
                      style={{
                        fontFamily: "dosis",
                        fontWeight: 600,
                        fontSize: 20 + "px",
                      }}
                    >
                      Gender:
                    </span>{" "}
                    <span style={{ fontSize: 20 + "px" }}>{pet.gender} </span>
                  </li>
                  <li>
                    {" "}
                    <span
                      style={{
                        fontFamily: "dosis",
                        fontWeight: 600,
                        fontSize: 20 + "px",
                      }}
                    >
                      Breed:
                    </span>{" "}
                    <span style={{ fontSize: 20 + "px" }}>
                      {pet.breed.name}{" "}
                    </span>
                  </li>
                  <li>
                    {" "}
                    <span
                      style={{
                        fontFamily: "dosis",
                        fontWeight: 600,
                        fontSize: 20 + "px",
                      }}
                    >
                      Price:
                    </span>{" "}
                    <span style={{ fontSize: 20 + "px" }}> ${pet.price} </span>
                  </li>
                  <li>
                    <Link to={`/dogs/${pet.id}`}> More Details </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-md rounded-pill"
                      onClick={() =>
                        this.props.addCart(this.props.userId, pet.id)
                      }
                    >
                      <span style={{ fontWeight: "bold" }}> ADD TO CART </span>
                    </button>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const breedId = ownProps.match.params.id * 1;
  return {
    userId: state.auth.id,
    breedPets: state.pets.filter(
      (pet) => pet.breedId === breedId && !pet.orderId
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (userId, petId) => dispatch(addCart(userId, petId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBreed);
