import axios from 'axios';

const GET_ORDERS = 'GET_ORDERS';
const ADD_ORDER = 'ADD_ORDER';

//action creators
const _addOrder = (newOrder) => {
  return {
    type: ADD_ORDER,
    payload: newOrder
  };
};

//thunks
export const addOrder = (shippingAddress, billingAddress, userId) => {
  return async(dispatch) => {
    const newOrder = (await axios.post(`/api/orders/${userId}`, { shippingAddress, billingAddress, userId })).data;
    console.log(newOrder)
  };
};

export default function ordersReducer(state=[], action){
  switch(action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    default:
      return state;
  };
};
