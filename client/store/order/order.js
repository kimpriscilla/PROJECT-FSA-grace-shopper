import axios from 'axios';

const GET_ORDERS = 'GET_ORDERS';
const ADD_ORDER = 'ADD_ORDER';

//action creators
const _getOrders = (orders) => {
  return {
    type: GET_ORDERS,
    payload: orders
  };
};

const _addOrder = (newOrder) => {
  return {
    type: ADD_ORDER,
    payload: newOrder
  };
};

//thunks
export const getOrders = (userId) => {
  return async(dispatch) => {
    const orders = (await axios.get(`api/orders/${userId}`)).data;
    dispatch(_getOrders(orders));
  };
};

export const addOrder = (orderData) => {
  return async(dispatch) => {
    const newOrder = (await axios.post(`http://localhost:8080/api/orders/${orderData.userId}`, orderData)).data;
    if(newOrder.success) {
      console.log("Successful payment")
  };
    dispatch(_addOrder(newOrder));
  };
};

//orders reducer
export default function ordersReducer(state=[], action){
  switch(action.type) {
    case GET_ORDERS:
      return action.payload;
    case ADD_ORDER:
      return [...state, action.payload];
    default:
      return state;
  };
};
