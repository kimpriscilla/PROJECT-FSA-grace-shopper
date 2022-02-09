import axios from "axios";

//action type
const LOAD_USERS = "LOAD_USERS";

//action creators

function _loadUsers(user) {
  return {
    type: LOAD_USERS,
    user,
  };
}

//thunk

export const loadUsers = () => {
  return async (dispatch) => {
    const user = (await axios.get("/api/users")).data;
    dispatch(_loadUsers(user));
  };
};

//user reducer

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_USERS:
      return action.user;
    default:
      return state;
  }
}
