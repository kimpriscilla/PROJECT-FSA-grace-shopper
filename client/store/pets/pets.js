import axios from "axios";

const GET_PETS = "GET_PETS";
const EDIT_PET = 'EDIT_PET';

//action creators
const _loadPets = (pets) => {
  return {
    type: GET_PETS,
    payload: pets,
  };
};

const _editPet = (pet) => {
  return {
    type: EDIT_PET,
    payload: pet,
  };
};

//thunks
export const loadPets = () => {
  return async (dispatch) => {
    const pets = (await axios.get("/api/pets")).data;
    dispatch(_loadPets(pets));
  };
};

export const editPet = (pet) => {
  return async (dispatch) => {
    console.log(pet)
    const newPet = (await axios.put(`/api/pets/${pet.id}`, pet)).data;
    dispatch(_editPet(newPet));
  };
};

//reducer
export default function petsReducer(state = [], action) {
  switch (action.type) {
    case GET_PETS:
      return action.payload;
    case EDIT_PET:
      console.log(action.payload)
      return state.map(pet => pet.id === action.payload.id ? action.payload : pet)
    default:
      return state;
  };
};
