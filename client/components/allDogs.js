import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/cart/cart";
import axios from "axios";

let tempUserId = 1;

const Dogs = ({ loading, pets, addCart, pet }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
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
                    <button
                      className="button-37"
                      role="button"
                      onClick={() => this.props.addCart(tempUserId, dog.id)}
                    >
                      Add to Cart
                    </button>
                  </li>
                </ul>
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
  );
};

const Pagination = ({ petPerPage, totalPet, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPet / petPerPage); i++) {
    pageNumbers.push(i); // will gives us correct amount of page numbers
  }
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

function allDogs({ pets, addCart }) {
  //allows us to use state in a function component
  const [pet, setPet] = useState([]); //empty array is default state
  const [loading, setLoading] = useState(false); //false is default state
  const [currentPage, setCurrentPage] = useState(1); //for pagination, default is page 1
  const [petPerPage, setPetPerPage] = useState(10); //how many dogs per page, default 10 dogs perpage

  useEffect(() => {
    //dont want to use async on useEffect so you create a new async func
    const fetchPet = async () => {
      setLoading(true); //set loading to true bc the dogs are loaded
      const res = await axios.get("/api/pets");
      setPet(res.data);
      setLoading(false);
    };
    fetchPet();
  }, []); //useEffect runs whenever the component mounts, and whenever it updates. When the app runs, itll update the component meaning a never ending loop, in order to stop that, pass empty array brackets. You can also put specific dependencies inside the array to make it run on that specific change

  const indexOfLastPet = currentPage * petPerPage; //gives us index of last dog
  //last index is 10 in this case, (on pg 1 * 10 dogs per pager = 10 )
  const indexOfFirstPet = indexOfLastPet - petPerPage;

  const currentDogs = pet.slice(indexOfFirstPet, indexOfLastPet);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); //page number is coming from paginate functional component. It is named number inside there

  //console.log("testing inside allDogs------->", pet);
  return (
    <div>
      <h3>Welcome, allDogs </h3>
      <div id="leftAllDogs"></div>
      <Dogs pets={currentDogs} addCart={addCart} pet={pet} loading={loading} />
      <Pagination
        petPerPage={petPerPage}
        totalPet={pet.length}
        paginate={paginate}
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
