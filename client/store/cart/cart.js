import axios from 'axios';

const GET_CART = 'GET_CART';
const DELETE_CART = 'DELETE_CART';

//action creators
const _getCart = (cartItems) => {
  return {
    type: GET_CART,
    payload: cartItems
  };
};

const _deleteCart = (cartItemId) => {
  return {
    type: DELETE_CART,
    payload: cartItemId
  };
};

//thunks
export const getCart = (userId) => {
  return async(dispatch) => {
    const cartItems = (await axios.get(`/api/cart/${userId}`)).data;
    dispatch(_getCart(cartItems));
  };
};

export const deleteCart = (userId, cartItemId) => {
  return async(dispatch) => {
    await axios.delete(`/api/cart/${userId}/${cartItemId}`);
    console.log(cartItemId)
    dispatch(_deleteCart(cartItemId));
  };
};

//reducer
export default function cartsReducer (state=[], action) {
  switch(action.type) {
    case GET_CART:
      return action.payload;
    case DELETE_CART:
      return state.filter(cartItem => cartItem.id !== action.payload);
    default:
      return state;
  };
};
