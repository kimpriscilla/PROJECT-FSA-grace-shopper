import React from 'react';
import { connect } from "react-redux";
import { getCart, deleteCart } from '../store/cart/cart';

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userId: 1, //CHANGE USER ID LATER
      totalPrice: 0
    };
  };

  componentDidMount() {
    this.props.getCart(this.state.userId)
  };

  render() {
    const cartItems = this.props.cartItems;
    return (
      <div>
        <ul id="dogCards">
        {
          cartItems.map((cartItem) => (
            <li key={ cartItem.id }>
                <ul id="individualCards">
                  <li>
                    <img src={cartItem.pet.imageUrl} />
                  </li>
                  <li>Name: {cartItem.pet.name} </li>
                  <li>Price: ${cartItem.pet.price} </li>
                  <li>
                  </li>
                  <button className="button-37" role="button" onClick={() => this.props.deleteCart(this.state.userId, cartItem.id)}>Remove</button>
                </ul>
            </li>
          ))
        }
        </ul>
        <button className="button-37" role="button">Checkout</button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cartItems
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCart: (userId) => dispatch(getCart(userId)),
    deleteCart: (userId, cartItemId) => dispatch(deleteCart(userId, cartItemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
