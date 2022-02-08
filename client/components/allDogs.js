import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const allDogs = (props) => {
  const dogs = [
    {
      id: 1,
      breed: "Jules",
      age: "4/16/2021",
      size: "3XL",
      training: 2,
      location: "170 Washington Terrace",
    },
    {
      id: 2,
      breed: "Eward",
      age: "10/24/2021",
      size: "M",
      training: 4,
      location: "29 Texas Circle",
    },
    {
      id: 3,
      breed: "Tedman",
      age: "8/4/2021",
      size: "M",
      training: 9,
      location: "4111 Walton Terrace",
    },
    {
      id: 4,
      breed: "Jeno",
      age: "4/20/2021",
      size: "XS",
      training: 2,
      location: "95 Hoepker Parkway",
    },
    {
      id: 5,
      breed: "Lucy",
      age: "2/10/2021",
      size: "L",
      training: 1,
      location: "74 Stone Corner Circle",
    },
    {
      id: 6,
      breed: "Jayme",
      age: "7/18/2021",
      size: "M",
      training: 1,
      location: "988 Grasskamp Junction",
    },
    {
      id: 7,
      breed: "Ashley",
      age: "4/26/2021",
      size: "3XL",
      training: 1,
      location: "7 Old Gate Crossing",
    },
    {
      id: 8,
      breed: "Joana",
      age: "6/7/2021",
      size: "XL",
      training: 3,
      location: "37844 Canary Way",
    },
    {
      id: 9,
      breed: "Bradan",
      age: "11/25/2021",
      size: "3XL",
      training: 9,
      location: "2 Loomis Pass",
    },
    {
      id: 10,
      breed: "Emanuele",
      age: "2/2/2022",
      size: "3XL",
      training: 2,
      location: "43791 Aberg Avenue",
    },
  ];

  return (
    <div>
      <h3>Welcome, allDogs </h3>
      <div id="leftAllDogs"></div>
      <div id="rightAllDogs">
        <ul id="dogCards">
          {dogs.map((dog) => (
            <li>
              <ul id="individualCards">
                <li>
                  <img src="/media/tempCard.jpg" />
                </li>
                <li>Breed: {dog.breed} </li>
                <li>Born on: {dog.age}</li>
                <li>
                  <Link to={`/dog/:${dog.id}`}> More Details </Link>
                </li>
                <li>
                  <button class="button-37" role="button">
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
};

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     username: state.auth.username,
//   };
// };

// export default connect(mapState)(Home);

export default allDogs;
