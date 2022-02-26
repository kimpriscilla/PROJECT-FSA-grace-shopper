import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../store/users/users";
import { Link } from "react-router-dom";

const AdminEditUsers = ({ users, deleteUser }) => {
  return (
    <>
      <div style={{ fontFamily: "dosis" }}>
        <h1 className="text-center" style={{ color: "red" }}>
          MANAGE USERS (ADMIN){" "}
        </h1>
        <a href="/create">
          <button
            type="button"
            className="btn btn-outline-danger btn-md rounded-pill"
          >
            {" "}
            ADD USER
          </button>
        </a>{" "}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-uppercase mb-0">
                    Manage users
                  </h5>
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
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Password
                        </th>

                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        return (
                          <>
                            <tr key={user.id}>
                              <td className="pl-4">
                                <img
                                  src={user.imageUrl}
                                  style={{
                                    height: 50 + "px",
                                    width: 50 + "px",
                                  }}
                                />
                              </td>
                              <td>
                                <h5 className="font-medium mb-0">
                                  {user.email}
                                </h5>
                              </td>
                              <td>
                                <span className="text-muted">{"******"}</span>
                                <br />
                              </td>
                              <td>
                                <div className="btn-group">
                                  <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href={`/user/edit/${user.id}`}
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
                                  onClick={() => deleteUser(user.id)}
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
};

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteUser: (id) => {
      dispatch(deleteUser(id));
    },
  };
};

export default connect(mapState, mapDispatch)(AdminEditUsers);
