import axios from "axios";

//action type
const LOAD_USERS = "LOAD_USERS";
const EDIT_USER = "EDIT_USERS";
const ADD_USER = "ADD_USER";

//action creators

function _loadUsers(user) {
  return {
    type: LOAD_USERS,
    user,
  };
}

function _editUsers(user) {
  return {
    type: EDIT_USER,
    user,
  };
}

function _addUsers(user) {
  return {
    type: ADD_USER,
    user,
  };
}

//thunk

export const loadUsers = () => {
  return async (dispatch) => {
    const user = (await axios.get("/api/users")).data;
    //console.log("FROM THE STORE--->", user);
    dispatch(_loadUsers(user));
  };
};

export const changeUser = (user) => {
  return async (dispatch) => {
    const edited = (await axios.put(`/api/users/${user.id}`, user)).data;

    dispatch(_editUsers(edited));
  };
};

export const addUser = (user) => {
  console.log("INSIDE THE STORE ADD USERRRR-->", user);
  return async (dispatch) => {
    const newUser = (await axios.post("/api/users", user)).data;
    dispatch(_addUsers(newUser));
  };
};
//user reducer

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_USERS:
      return action.user;
    case EDIT_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    case ADD_USER:
      return [...state, action.user];
    default:
      return state;
  }
}
