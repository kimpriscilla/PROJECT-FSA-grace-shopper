import axios from 'axios';

const GET_STATE_ORDERS = 'GET_STATE_ORDERS';

const _getStateOrders = (stateOrders) => {
  return {
    type: GET_STATE_ORDERS,
    payload: stateOrders
  };
};

export const getStateOrders = () => {
  return async(dispatch) => {
    const stateOrders = (await axios.get('/api/sales/state')).data;
    dispatch(_getStateOrders(stateOrders));
  };
};

export default function stateOrdersReducer(state=[], action){
  switch(action.type) {
    case GET_STATE_ORDERS:
      return action.payload
    default:
      return state
  };
};
