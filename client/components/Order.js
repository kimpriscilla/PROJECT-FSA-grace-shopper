import React from 'react';
import { connect } from "react-redux";
import { addOrder } from '../store/order/order';

let tempShipping = 'NYC';
let tempBilling = 'NYC';
let tempUserId = 1;

class Order extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.addOrder(tempShipping, tempBilling, tempUserId)}>Check Out</button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCart: (userId) => dispatch(getCart(userId)),
    addOrder: (tempShipping, tempBilling, userId) => dispatch(addOrder(tempShipping, tempBilling, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
