import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loadPets, editPet } from "../store/pets/pets";

class editDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      gender: "",
      price: 0,
      size: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setState(this.props.pet);
    }
  }

  componentDidMount() {
    this.props.loadPets();
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state)
    this.props.editPet(this.state);
    <Redirect to={`dogs/:${this.state.id}`} />;
  }

  render() {
    const { name, gender, price, size, description } = this.state;

    return (
      <>
        {/* <h1>EDIT DOG</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          ></input>
          <select name="gender" value={gender} onChange={this.handleChange}>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            name="price"
            type="text"
            placeholder="Price"
            value={price}
            onChange={this.handleChange}
          ></input>
          <input
            name="size"
            type="text"
            placeholder="Size"
            value={size}
            onChange={this.handleChange}
          ></input>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          ></input>
          <button classNameName="button-37" role="button">
            Update
          </button>
        </form> */}
        <div className="container bootstrap snippets bootdey">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <img
                  alt=""
                  style={{ width: 600 + "px" }}
                  title=""
                  className="img-circle img-thumbnail isTooltip"
                  src={this.props.pet.imageUrl}
                  data-original-title="Usuario"
                />
              </div>

              <div className=" col-md-6">
                <strong>Information</strong>
                <br />

                <div className="table-responsive">
                  <form onSubmit={this.handleSubmit}>
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-user  text-primary"></span>
                              Name
                            </strong>
                          </td>
                          <td>
                            <input
                              name="name"
                              type="text"
                              value={name}
                              onChange={this.handleChange}
                            ></input>
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
                              name="price"
                              type="text"
                              value={price}
                              onChange={this.handleChange}
                            ></input>
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
                              value={gender}
                              onChange={this.handleChange}
                            >
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-envelope text-primary"></span>
                              Size
                            </strong>
                          </td>
                          <td>
                            <select
                              name="size"
                              value={size}
                              onChange={this.handleChange}
                            >
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Large</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-calendar text-primary"></span>
                              Description
                            </strong>
                          </td>
                          <td>
                            <textarea
                              id="w3review"
                              name="description"
                              value={description}
                              rows="4"
                              cols="20"
                              onChange={this.handleChange}
                            ></textarea>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button>Save</button>
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

const mapStateToProps = (state, ownProps) => {
  const petId = ownProps.match.params.id * 1;
  return {
    pet: state.pets.filter((pet) => pet.id === petId)[0] || [],
    breeds: state.breeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPets: () => dispatch(loadPets()),
    editPet: (newPet) => dispatch(editPet(newPet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editDog);
