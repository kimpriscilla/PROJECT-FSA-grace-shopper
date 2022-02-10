import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from '../store/cart/cart';

let tempUserId = 1;

class allDogs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Welcome, allDogs </h3>
        <div id="leftAllDogs"></div>
        <div id="rightAllDogs">
          <ul id="dogCards">
            {this.props.pets.map((dog) => (
              <li key={dog.id}>
                <ul id="individualCards">
                  <li>
                    <img src={dog.imageUrl} />
                  </li>
                  <li>Name: {dog.name} </li>
                  <li>Gender: {dog.gender} </li>
                  {/* <li>Breed: {dog.breed.name} </li> ADD ONCE DATA SEEDS DOG BREED*/}
                  <li>Born on: {dog.dateOfBirth}</li>
                  <li>
                    <Link to={`/dogs/:${dog.id}`}> More Details </Link>
                  </li>
                  <li>
                    <button className="button-37" role="button" onClick={() => this.props.addCart(tempUserId, dog.id)}>
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //to access campuses in props
  return {
    pets: state.pets,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (userId, petId) => dispatch(addCart(userId, petId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(allDogs);
