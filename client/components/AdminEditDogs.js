import React from "react";
import { connect } from "react-redux";
import { deletePet } from "../store/pets/pets";
import { editPet, addPet } from "../store/pets/pets";
import { Link } from "react-router-dom";

const AdminEditDogs = ({ pets, deletePet }) => (
  <>
    <div style={{ fontFamily: "dosis" }}>
      <h1 className="text-center" style={{ color: "red" }}>
        MANAGE DOGS (ADMIN)
      </h1>

      <a href="/addDog">
        <button
          type="button"
          className="btn btn-outline-warning btn-md rounded-pill"
        >
          {" "}
          ADD DOG
        </button>
      </a>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">Manage Dogs</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium pl-4"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Breed
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        DOB
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Manage
                      </th>
                      {/* <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      EXAMPLE
                    </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {pets.map((dog) => {
                      return (
                        <>
                          <tr key={dog.id}>
                            <td className="pl-4">
                              <img
                                src={dog.imageUrl}
                                style={{ height: 50 + "px", width: 50 + "px" }}
                              />
                            </td>
                            <td>
                              <h5 className="font-medium mb-0">{dog.name}</h5>
                            </td>
                            <td>
                              <span className="text-muted">
                                {dog.breed.name}
                              </span>
                              <br />
                            </td>
                            <td>
                              <span className="text-muted">{dog.gender}</span>
                              <br />
                            </td>
                            <td>
                              <span className="text-muted">
                                {dog.dateOfBirth}
                              </span>
                              <br />
                            </td>
                            <td>
                              <span className="text-muted">{dog.size}</span>
                              <br />
                            </td>
                            <td>
                              <span className="text-muted">{dog.price}</span>
                              <br />
                            </td>

                            <td>
                              <div className="btn-group">
                                <a
                                  className="nav-link active"
                                  aria-current="page"
                                  href={`/dog/edit/${dog.id}`}
                                  // onClick={() => editPet(dog)}
                                >
                                  <i className="bi- bi-pen"></i>
                                </a>
                              </div>

                              <button
                                type="button"
                                className="btn btn-outline-info btn-circle btn-md btn-circle ml-2"
                                style={{
                                  margin: 5 + "px",
                                  border: "none",
                                  color: "red",
                                }}
                                onClick={() => deletePet(dog.id)}
                              >
                                <i className="bi bi-trash"></i>{" "}
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const mapState = (state) => {
  return { pets: state.pets };
};

const mapDispatch = (dispatch) => {
  return {
    deletePet: (id) => {
      dispatch(deletePet(id));
    },
    editPet: (pet) => {
      dispatch(editPet(pet));
    },
    addPet: (dog) => {
      dispatch(addPet(dog));
    },
  };
};
export default connect(mapState, mapDispatch)(AdminEditDogs);
