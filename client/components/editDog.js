import React from 'react';
import { connect } from "react-redux";
import { loadPets, editPet } from '../store/pets/pets';

class editDog extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
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
  }

  render() {
    console.log(this.state)
    if (!this.props.pet) {
      return <h1>Loading</h1>
    } else {
      const { name, price, size, description, gender, breed } = this.props.pet;
      console.log(this.props)
      return (
        <form>
          <input name='name' type='text' placeholder='Name' value={name} onChange={this.handleChange}></input>
          <input name='description' type='text' placeholder='Description' value={description} onChange={this.handleChange}></input>
          <button>Update</button>
        </form>
      )
    }
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
