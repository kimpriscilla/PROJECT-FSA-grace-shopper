import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from "../store/cart/cart";

class SelectedBreed extends React.Component {

  render() {

    const pets = this.props.breedPets;

    if (pets.length < 1) {
      return <h1>Sorry we are out!</h1>
    } else {
      return (
        <div>
          <h1>{pets[0].breed.name}s</h1>
          <ul id="dogCards">
          {
            pets.map(pet => (
              <li key={pet.id}>
            <ul id="individualCards">
              <li>
                <img src={pet.imageUrl} />
              </li>
              <li>{pet.name}</li>
              <li>Gender: {pet.gender} </li>
              <li>Breed: {pet.breed.name} </li>
              <li>Price: ${pet.price}</li>
              <li>
                <Link to={`/dogs/${pet.id}`}> More Details </Link>
              </li>
              <li>
                <button
                  className="button-37"
                  role="button"
                  onClick={() => this.props.addCart(this.props.userId, pet.id)}
                >
                  Add to Cart
                </button>
              </li>
            </ul>
          </li>
            ))
          }
        </ul>
        </div>
      )
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  const breedId = ownProps.match.params.id*1;
  return {
    userId: state.auth.id,
    breedPets: state.pets.filter((pet) => pet.breedId === breedId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (userId, petId) => dispatch(addCart(userId, petId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBreed);
