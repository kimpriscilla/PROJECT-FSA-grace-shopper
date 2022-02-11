import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/cart/cart";
import ReactPaginate from "react-paginate";
import axios from "axios";

let tempUserId = 1;

// class allDogs extends React.Component {
//   constructor(props) {
//     super(props);
//   }

function allDogs({ pets, addCart }) {
  //allows us to use state in a function component
  const [pet, setPet] = useState([]); //empty array is default state
  const [loading, setLoading] = useState(false); //false is default state
  const [currentPage, setCurrentPage] = useState(1); //for pagination, default is page 1
  const [petPerPage, setPetPerPage] = useState(10); //how many dogs per page, default 10 dogs perpage

  useEffect(() => {
    //dont want to use async on useEffect so you create a new async func
    const fetchPet = async () => {
      setLoading(true);
      const res = await axios.get("/api/pets");
      setPet(res.data);
      setLoading(false);
    };
    fetchPet();
  }, []); //useEffect runs whenever the component mounts, and whenever it updates. When the app runs, itll update the component meaning a never ending loop, in order to stop that, pass empty array brackets. You can also put specific dependencies inside the array to make it run on that specific change
  console.log("testing inside allDogs------->", pet);
  return (
    <div>
      <h3>Welcome, allDogs </h3>
      <div id="leftAllDogs"></div>
      <div id="rightAllDogs">
        <ul id="dogCards">
          {pets.map((dog) => (
            <li key={dog.id}>
              <ul id="individualCards">
                <li>
                  <img src={dog.imageUrl} />
                </li>
                <li>Name: {dog.name} </li>
                <li>Gender: {dog.gender} </li>
                <li>Breed: {dog.breed.name} </li>
                <li>Born on: {dog.dateOfBirth}</li>
                <li>
                  <Link to={`/dogs/:${dog.id}`}> More Details </Link>
                </li>
                <li>
                  <button
                    className="button-37"
                    role="button"
                    onClick={() => addCart(tempUserId, dog.id)}
                  >
                    Add to Cart
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        pageCount={10}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        containerClassName={"pagination justify-content-center"}
      />
    </div>
  );
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
    addCart: (userId, petId) => dispatch(addCart(userId, petId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(allDogs);
