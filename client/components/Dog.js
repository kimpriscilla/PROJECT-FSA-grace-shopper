import React from 'react';
import { connect } from "react-redux";
import { loadPets } from '../store/pets/pets';

class Dog extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
    this.props.loadPets();
  };

  render() {
    const { pet } = this.props;
    console.log(pet)
    return (
      <div>
        <img src='/default.png'></img>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const petId = ownProps.match.params.id[1]*1;
  return {
    pet: state.pets.filter(pet => pet.id === petId)[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPets: () => dispatch(loadPets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
