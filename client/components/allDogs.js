import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadPets } from "../store/pets/pets";
import { loadUsers } from "../store/users/users";

/**
 * COMPONENT
 */
class allDogs extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.loadPets();
    this.props.loadUsers();
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
                  <li>Breed: {dog.breed.name} </li>
                  <li>Born on: {dog.dateOfBirth}</li>
                  <li>
                    <Link to={`/dogs/:${dog.id}`}> More Details </Link>
                  </li>
                  <li>
                    <button className="button-37" role="button">
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

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default connect(mapState)(Home);

const mapStateToProps = (state) => {
  //to access campuses in props
  return {
    pets: state.pets,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPets: () => dispatch(loadPets()),
    loadUsers: () => dispatch(loadUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(allDogs);
