import React from "react";
import { useSelector } from "react-redux";

function SearchBar() {
  const pets = useSelector((state) => state.pets) || [];

  //console.log("dog-name-->", pets);
  // console.log(pet[1].name);
  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="search...." />
          <div className="searchIcon"> </div>
          <div className="dataResult">
            {pets.map((dog) => {
              return <a key={dog.id}>{dog.name} </a>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
