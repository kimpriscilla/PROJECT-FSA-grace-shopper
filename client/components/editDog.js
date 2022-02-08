import React from 'react';
import { connect } from "react-redux";
import { loadPets, editPet } from '../store/pets/pets';

class editDog extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    this.props.loadPets();
  };

  handleChange(ev) {
    this.setState({
      [ev.target.name] : ev.target.value
    })
  }

  render() {
    console.log(this.props)
    if (!this.props.pet) {
      return <h1>Loading</h1>
    } else {
      const { name, price, size, description, gender, breed } = this.props;
      return (
        <form>
          <input value={name} onChange={this.handleChange}></input>
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
