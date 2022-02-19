import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Filter() {
  const pets = useSelector((state) => state.pets) || [];
  console.log(pets);

  const [item, setItem] = useState(pets);
  console.log("?>>", item);

  const filterBySize = [...new Set(pets.map((dog) => dog.size))];
  //console.log(filterBySize);
  const filterByGender = [...new Set(pets.map((dog) => dog.gender))];
  //console.log(filterByGender);
  // const filterByAge = [...new Set(pets.map((dog) => dog.age))];
  // console.log(filterByAge); //!dob is not done in allDogs page
  const filterByPrice = [...new Set(pets.map((dog) => dog.price))];
  // console.log(filterByPrice);

  //testing size for now
  const filterByCategory = (val) => {
    const item = pets.filter((newVal) => {
      return newVal.size === val;
    });
    setItem(item);
  };

  return (
    <>
      {/* <div className="d-flex justify-content-center">
        {filterBySize.map((dog, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterByCategory(dog)}
              key={id}
            >
              {dog}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(pets)}
        >
          All
        </button>
      </div> */}
      <div className="btn-group">
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Size
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {filterBySize.map((val, id) => {
              return (
                <li key={val.id}>
                  <a class="dropdown-item" href="#">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gender
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {filterByGender.map((val) => {
              return (
                <li key={val.id}>
                  <a class="dropdown-item" href="#">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Price
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {filterByPrice.map((val) => {
              return (
                <li key={val.id}>
                  <a class="dropdown-item" href="#">
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filter;
