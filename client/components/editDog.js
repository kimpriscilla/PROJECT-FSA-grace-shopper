import React from 'react';
import { connect } from "react-redux";
import { loadPets } from '../store/pets/pets';

class editDog extends React.Component {
  constructor(props) {
    super(props);
    const { pet } = this.props;
    this.state = {
      id: pet.id ? pet.id : 0,
      name: pet.name ? pet.name : ''
    }
  };

  componentDidMount() {
    this.props.loadPets();
  };

  render() {
    const { id, name } = this.state;
    console.log(name)
    return (
      <form>
      <p>test</p>
      </form>
    )
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(editDog);
