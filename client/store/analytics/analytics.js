import axios from 'axios';

const GET_BREED_SALES = 'GET_BREED_SALES';

const _getBreedSales = (breedSales) => {
  return {
    type: GET_BREED_SALES,
    payload: breedSales
  };
};

export const getBreedSales = () => {
  return async(dispatch) => {
    const breedSales = (await axios.get('/api/sales')).data;
    dispatch(_getBreedSales(breedSales));
  };
};

export default function analyticsReducer(state=[], action){
  switch(action.type) {
    case GET_BREED_SALES:
      return action.payload
    default:
      return state
  };
};
