import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/cart/cart";
import axios from "axios";
import auth from "../store/auth";

import Select from "react-select";

//I need to replace this with something that identifies a guest so when he returns to the page without clearing his local storage or cookies, he can still access his cart
//let tempUserId = 1;

const Dogs = ({ loading, pets, id }) => {
  const dispatch = useDispatch();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const addToCart = (uuid, id) => {
    dispatch(addCart(uuid, id));
  };

  return (
    <div id="rightAllDogs">
      <div></div>
      <ul id="dogCards" style={{ fontFamily: "dosis" }}>
        {pets.map((dog) => (
          <li key={dog.id}>
            <ul id="individualCards">
              <li>
                <img src={dog.imageUrl} />
              </li>
              <li>
                {" "}
                <span style={{ fontSize: 25 + "px", fontWeight: 600 }}>
                  {dog.name}{" "}
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
                  Gender:
                </span>{" "}
                <span style={{ fontSize: 20 + "px" }}>{dog.gender} </span>
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
                <span style={{ fontSize: 20 + "px" }}>{dog.breed.name} </span>
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
                ${dog.price}
              </li>
              <li>
                <Link to={`/dogs/${dog.id}`}> More Details </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-md rounded-pill"
                  onClick={() => addToCart(id, dog.id)}
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

function allDogs({ addCart }) {
  let pets = useSelector((state) => state.pets).filter((pet) => !pet.orderId);

  //Attempt at filtering
  const [search, setNewSearch] = useState("");
  const [sPrice, setsPrice] = useState("");
  const [sGender, setsGender] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
  const handleSearchPrice = (e) => {
    setsPrice(e.target.value);
  };
  const handleSearchGender = (e) => {
    console.log("EEEEE---->", e);
    setsGender(e.target.value);
  };

  pets = !search
    ? pets
    : pets.filter((dog) =>
        dog.breed.name.toLowerCase().includes(search.toLowerCase())
      );

  pets = !sPrice
    ? pets
    : pets.filter((dog) => parseInt(dog.price) < parseInt(sPrice));

  pets = !sGender
    ? pets
    : pets.filter((dog) => dog.gender.toLowerCase() === sGender.toLowerCase());

  const id = useSelector((state) => state.auth.id);

  //allows us to use state in a function component
  //const [pet, setPet] = useState([]); //empty array is default state

  // console.log("!!!", pet);
  const [loading, setLoading] = useState(false); //false is default state
  const [currentPage, setCurrentPage] = useState(1); //for pagination, default is page 1
  const [petPerPage, setpetPerPage] = useState(9); //how many dogs per page, default 10 dogs perpage
  const handlePets = (e) => {
    setpetPerPage(e.target.value);
  };
  // useEffect(() => {
  //   //dont want to use async on useEffect so you create a new async func
  //   setLoading(true); //set loading to true bc the dogs are loaded
  //   //const res = await axios.get("/api/pets");
  //   // const res = pets;
  //   setPet(pets);
  //   setLoading(false);
  // }, []);

  const indexOfLastPet = currentPage * petPerPage; //gives us index of last dog
  //last index is 10 in this case, (on pg 1 * 10 dogs per pager = 10 )
  const indexOfFirstPet = indexOfLastPet - petPerPage;

  const currentDogs = pets.slice(indexOfFirstPet, indexOfLastPet);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); //page number is coming from paginate functional component. It is named number inside there

  //console.log("testing inside allDogs------->", pet);
  //console.log("-------->", pets);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Search by Breed </td>
            <td>
              <input type="text" value={search} onChange={handleSearchChange} />
            </td>
          </tr>
          <tr>
            <td>Search by Max Price</td>
            <td>
              <input type="text" value={sPrice} onChange={handleSearchPrice} />
            </td>
          </tr>
          <tr>
            <td>Search by Gender</td>
            <td>
              <input
                type="text"
                value={sGender}
                onChange={handleSearchGender}
              />
            </td>
          </tr>
          {/* <tr>
            <td>Number of Pets Per Page</td>
            <td>
              <input type="text" value={petPerPage} onChange={handlePets} />
            </td>
          </tr> */}
        </tbody>
      </table>

      <div id="leftAllDogs"></div>
      <Dogs
        pets={currentDogs}
        addCart={addCart}
        pet={pets}
        loading={loading}
        id={id}
      />
      <Pagination
        petPerPage={petPerPage}
        totalPet={pets.length}
        paginate={paginate}
      />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   //to access campuses in props
//   return {
//     pets: state.pets,
//     users: state.users,
//     auth: state.auth.id,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCart: (userId, petId) => dispatch(addCart(userId, petId)),
//   };
// };

//export default connect(mapStateToProps)(allDogs);
export default allDogs;
