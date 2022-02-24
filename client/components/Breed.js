import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Breed() {
  const breeds = useSelector((state) => state.breeds);

  return (
    <div>
      <h1
        className="text-center"
        style={{ fontFamily: "dosis", fontWeight: 600 }}
      >
        Browse By Breed:
      </h1>
      <ul id="dogCards">
        {breeds.map((breed) => (
          <li key={breed.id}>
            <ul id="individualCards">
              <li>
                <img src={breed.imageUrl} />
              </li>
              <li>
                <span
                  style={{
                    fontFamily: "dosis",
                    fontWeight: "600",
                    fontSize: 150 + "%",
                  }}
                >
                  {breed.name} ({breed.stock})
                </span>
              </li>
              <li>
                <a href={`/breed/${breed.id}`}>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-md rounded-pill"
                  >
                    <span style={{ fontWeight: "bold" }}> SHOP </span>
                  </button>
                </a>
              </li>
              <li></li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
