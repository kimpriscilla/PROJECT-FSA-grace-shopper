import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Breed() {
  const breeds = useSelector((state) => state.breeds);

  return (
    <div>
      <h1>Browse By Breed:</h1>
      {/* <ul id="dogCards">
        {breeds.map((breed) => (
          <li key={breed.id}>
            <ul id="individualCards">
              <li>
                <img src={breed.imageUrl} />
              </li>
              <li>
                {breed.name} ({breed.stock})
              </li>
              <li>
                <Link to={`/breed/${breed.id}`}> Shop </Link>
              </li>
              <li></li>
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
