import React, { Component } from "react";
import { connect } from "react-redux";
import { addPet } from "../store/pets/pets";

class AddDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      gender: "",
      size: "",
      dateOfBirth: "",
      imageUrl: "",
      breedId: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.addPet(this.state);
    this.setState({
      name: "",
      price: "",
      description: "",
      gender: "",
      size: "",
      dateOfBirth: "",
      imageUrl: "",
      breedId: "",
    });
  }
  render() {
    const {
      name,
      price,
      description,
      gender,
      size,
      dateOfBirth,
      imageUrl,
      breedId,
    } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <>
        {/* <form onSubmit={onSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    value={name}
                    name="name"
                    onChange={onChange}
                    placeholder="name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={price}
                    name="price"
                    onChange={onChange}
                    placeholder="price"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={description}
                    name="description"
                    onChange={onChange}
                    placeholder="description"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={gender}
                    name="gender"
                    onChange={onChange}
                    placeholder="gender"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={size}
                    name="size"
                    onChange={onChange}
                    placeholder="size"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={dateOfBirth}
                    name="dateOfBirth"
                    onChange={onChange}
                    placeholder="date of birth"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="file"
                    className="file-uploader pull-left"
                    value={imageUrl}
                    name="imageUrl"
                    onChange={onChange}
                    placeholder="imageUrl"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <select value={breedId} name="breedId" onChange={onChange}>
                    <option value="">--------------</option>
                    {this.props.breeds.map((dog) => {
                      return (
                        <option value={dog.id} key={dog.id}>
                          {dog.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <button type="submit" className="btn btn-theme">
              Add Dog
            </button>
          </p>
        </form> */}

        <div
          className="container bootstrap snippets bootdey"
          style={{ fontFamily: "dosis" }}
        >
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-3 -md-2">
                {/* <img
                  alt=""
                  style={{ width: 600 + "px" }}
                  title=""
                  className="img-circle img-thumbnail isTooltip"
                  // src={imageUrl ? imageUrl : filtered.imageUrl}
                  data-original-title="Usuario"
                /> */}
              </div>
              <div className=" col-md-6">
                <h3 className="text-center" style={{ color: "red" }}>
                  ADD NEW DOG
                </h3>

                <hr />
                <div className="table-responsive">
                  <form onSubmit={onSubmit}>
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              Image Url
                            </strong>
                          </td>
                          <td>
                            <input
                              type="file"
                              className="file-uploader pull-left"
                              value={imageUrl}
                              name="imageUrl"
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-user  text-primary"></span>
                              Name
                            </strong>
                          </td>
                          <td>
                            <input
                              value={name}
                              name="name"
                              onChange={onChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-bookmark text-primary"></span>
                              Price
                            </strong>
                          </td>
                          <td>
                            <input
                              value={price}
                              name="price"
                              onChange={onChange}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              Date Of Birth
                            </strong>
                          </td>
                          <td>
                            <input
                              value={dateOfBirth}
                              name="dateOfBirth"
                              onChange={onChange}
                              placeholder="YYYY/MM/DD"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              Gender
                            </strong>
                          </td>
                          <td>
                            <select
                              name="gender"
                              defaultValue={gender}
                              onChange={onChange}
                            >
                              <option>-------</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              Size
                            </strong>
                          </td>
                          <td>
                            <select
                              name="size"
                              defaultValue={size}
                              onChange={onChange}
                            >
                              <option>-------</option>
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Large</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              Breed
                            </strong>
                          </td>
                          <td>
                            <select
                              value={breedId}
                              name="breedId"
                              onChange={onChange}
                            >
                              <option value="">--------------</option>
                              {this.props.breeds.map((dog) => {
                                return (
                                  <option value={dog.id} key={dog.id}>
                                    {dog.name}
                                  </option>
                                );
                              })}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              Description
                            </strong>
                          </td>
                          <td>
                            <textarea
                              style={{ width: 50 + "%" }}
                              value={description}
                              name="description"
                              onChange={onChange}
                              placeholder="description"
                            >
                              {" "}
                            </textarea>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <button
                        type="submit"
                        className="btn btn-outline-danger btn-md rounded-pill"
                      >
                        Add Dog
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapState = (state) => {
  return {
    breeds: state.breeds || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    addPet: (dog) => {
      dispatch(addPet(dog));
    },
  };
};

export default connect(mapState, mapDispatch)(AddDog);
