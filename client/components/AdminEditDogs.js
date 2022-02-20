import React from "react";
import { connect } from "react-redux";
import { deletePet } from "../store/pets/pets";
import { editPet } from "../store/pets/pets";

const AdminEditDogs = ({ pets, deletePet, editPet }) => (
  <>
    {console.log(pets)}
    <h1>ADMIN EDIT DOG</h1>
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
                        <tr>
                          <td key={dog.id} className="pl-4">
                            {dog.id}
                          </td>
                          <td>
                            <h5 className="font-medium mb-0">{dog.name}</h5>
                            <img
                              src={dog.imageUrl}
                              style={{ height: 40 + "px", width: 40 + "px" }}
                            />
                          </td>
                          <td>
                            <span className="text-muted">{dog.breed.name}</span>
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

                          {/* <td>
                            <select
                              className="form-control category-select"
                              id="exampleFormControlSelect1"
                            >
                              <option>----</option>
                              <option>Delete</option>
                              <option>Edit</option>
                            </select>
                          </td> */}
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
                              style={{ margin: 5 + "px" }}
                              onClick={() => editPet(dog)}
                            >
                              <i className="bi- bi-pen"></i>
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href={`/dog/edit/${dog.id}`}
                              ></a>
                            </button>

                            <button
                              type="button"
                              className="btn btn-outline-info btn-circle btn-md btn-circle ml-2"
                              style={{ margin: 5 + "px" }}
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
  };
};
export default connect(mapState, mapDispatch)(AdminEditDogs);
