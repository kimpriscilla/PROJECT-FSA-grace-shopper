import axios from "axios";

const GET_CART = "GET_CART";
const DELETE_CART = "DELETE_CART";
const ADD_CART = "ADD_CART";

//action creators
const _getCart = (cartItems) => {
  return {
    type: GET_CART,
    payload: cartItems,
  };
};

const _deleteCart = (cartItemId) => {
  return {
    type: DELETE_CART,
    payload: cartItemId,
  };
};

const _addCart = (newCartItem) => {
  return {
    type: ADD_CART,
    payload: newCartItem,
  };
};

//thunks
export const getCart = (userId) => {
  return async (dispatch) => {
    let cartItems;
    //if userId exist do this
    if (userId) {
      //grab a cart in localstorage
      const guestCart = localStorage.getItem("cart");
      let identifier = JSON.parse(localStorage["guest"]);
      //If there is a cart in localstorage
      if (guestCart) {
        //Parse it
        const grabCart = JSON.parse(localStorage["cart"]);
        //for each element found in grabCart, go to post route using the given userId and the petId stored in each element
        console.log(grabCart, "Line 43, grabCart");
        grabCart.forEach(async (pet) => {
          console.log(pet, "line 45, pet");
          await axios.put(`/api/cart`, {
            userId,
            petId: pet[0].petId,
            authId: identifier.id,
          });
          /* await axios.post(`/api/cart/${userId}/${pet.petId}`, {
            userId,
            petId: pet.petId,
          });*/
        });
        //clear the local storage because user is logged in
        localStorage.removeItem("cart");
      }
      //grab the cart from the db for this user
      cartItems = (await axios.get(`/api/cart/${userId}`)).data;
    } else {
      //if the userId is not present, then parse the guest uuid
      const guest = JSON.parse(localStorage["guest"]);
      //get the cart items whose authid matches the guest  uuid
      cartItems = (await axios.get(`/api/cart/guest/${guest.id}`)).data;
    }
    dispatch(_getCart(cartItems));
  };
};

export const deleteCart = (userId, cartItemId) => {
  console.log(userId, "cart.Js, line 70, userId");
  const guestId = JSON.parse(localStorage["guest"]);
  userId = userId ? userId : guestId.id;
  return async (dispatch) => {
    await axios.delete(`/api/cart/${userId}/${cartItemId}`);
    dispatch(_deleteCart(cartItemId));
  };
};

export const addCart = (userId, petId) => {
  return async (dispatch) => {
    let newCart;
    //If there is a userId, then any added items will go here. The item will be added to the Cart table like normal.
    if (userId) {
      newCart = (
        await axios.post(`/api/cart/${userId}/${petId}`, { userId, petId })
      ).data;
    }
    //If there is no userId, then that means the user is not logged in. The program will do this instead.
    if (!userId) {
      //Grab the guest token containing a randomly generated UUID
      let identifier = localStorage.getItem("guest");
      //Parse the guest token so the actual id is accessible
      identifier = JSON.parse(localStorage["guest"]);
      //Now go to this route instead, which like the previous route, adds an item to the cart. But instead of submitting a userId in req.body along with petID, it submits the UUID as an authId
      newCart = (
        await axios.post(`/api/cart/guest/${petId}`, {
          authId: identifier.id,
          petId,
        })
      ).data;
      //Now if we were to use a locally stored cart. We would then grab the newly created cart item and append a parentId. That parentId will be the guest token's UUID
      newCart = { ...newCart, parentId: identifier.id };
      //This grabs a cart from local storage
      const cartExist = localStorage.getItem("cart");
      //if cart doesn't exist, we need to create one
      if (!cartExist) {
        //make a new array and add the new cart item
        const newArray = [newCart];
        //save the new array with cart item
        localStorage["cart"] = JSON.stringify(newArray);
      }
      //if it did find a cart in local storage
      else {
        //parse localstorage cart
        const grabCart = JSON.parse(localStorage["cart"]);
        //push the new cart item to the local storage cart
        grabCart.push(newCart);
        //Save the array with added new item to local storage
        localStorage["cart"] = JSON.stringify(grabCart);
      }
    }
    dispatch(_addCart(newCart));
  };
};

//reducer
export default function cartsReducer(state = [], action) {
  switch (action.type) {
    case GET_CART:
      return action.payload;
    case DELETE_CART:
      return state.filter((cartItem) => cartItem.id !== action.payload);
    case ADD_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}
