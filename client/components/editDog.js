import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loadPets, editPet } from '../store/pets/pets';

class editDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      gender: '',
      price: 0,
      size: '',
      description: '',
      breed: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setState(this.props.pet);
    };
  };

  componentDidMount() {
    this.props.loadPets();
  };

  handleChange(ev) {
    this.setState({
      [ev.target.name] : ev.target.value
    });
  };

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.editPet(this.state);
    <Redirect to={`dogs/:${this.state.id}`} />
  };

  render() {
    const { name, gender, price, size, description, breed } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' type='text' placeholder='Name' value={name} onChange={this.handleChange}></input>
        <select name='gender' value={gender} onChange={this.handleChange}>
          <option>male</option>
          <option>female</option>
        </select>
        <input name='price' type='text' placeholder='Price' value={price} onChange={this.handleChange}></input>
        <input name='size' type='text' placeholder='Size' value={size} onChange={this.handleChange}></input>
        <input name='description' type='text' placeholder='Description' value={description} onChange={this.handleChange}></input>
        <button className="button-37" role="button">Update</button>
      </form>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  const petId = ownProps.match.params.id*1;
  return {
    pet: state.pets.filter(pet => pet.id === petId)[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPets: () => dispatch(loadPets()),
    editPet: (newPet) => dispatch(editPet(newPet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editDog);
