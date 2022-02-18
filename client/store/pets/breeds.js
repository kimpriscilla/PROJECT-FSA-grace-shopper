import axios from "axios";

const GET_BREEDS = "GET_BREEDS";

const _getBreeds = (breeds) => {
  return {
    type: GET_BREEDS,
    payload: breeds,
  };
};

export const getBreeds = () => {
  return async (dispatch) => {
    const breeds = (await axios.get("/api/breeds")).data;
    dispatch(_getBreeds(breeds));
  };
};

export default function breedsReducer(state = [], action) {
  switch (action.type) {
    case GET_BREEDS:
      return action.payload;
    default:
      return state;
  }
}
