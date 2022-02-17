import React, { useState } from "react";
import { useSelector } from "react-redux";

function SearchBar() {
  const pets = useSelector((state) => state.pets) || [];

  const [filteredData, setFilteredData] = useState([]);
  //testing purposes
  // const uniqueAges = [...new Set(pets.map((dog) => dog.breed.name))];
  //console.log(uniqueAges);

  const handleChange = (ev) => {
    const searchWord = ev.target.value;
    const newFilter = pets.filter((value) => {
      if (value.breed.name) {
        return value.breed.name
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      }
    });
    setFilteredData(newFilter);
  };

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="search...." onChange={handleChange} />
          <div className="searchIcon"> </div>
          <div className="dataResult">
            {/*   const uniqueAges = [...new Set(pets.map((dog) => dog.breed.name))]
                console.log(uniqueAges); */}
            {/* {filteredData.length != 0 && ( */}
            <div className="dataItem">
              {[
                ...new Set(
                  pets.map((dog, key) => (
                    <a className="dataItem" key={dog.id}>
                      <p>{dog.breed.name}</p>
                    </a>
                  ))
                ),
              ]}
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
