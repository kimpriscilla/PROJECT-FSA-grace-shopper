import React from 'react';
import { connect } from "react-redux";
import { getOrders, addOrder } from '../store/order/order';
import { Redirect } from 'react-router-dom';

let tempUserId = 1;

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: tempUserId,
      shippingAddress: '',
      billingAddress: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(ev) {
    this.setState({
      [ev.target.name] : ev.target.value
    });
  };

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addOrder(this.state);

  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='shippingAddress' placeholder='Shipping Address' onChange={this.handleChange}></input>
          <input name='billingAddress' placeholder='Billing Address' onChange={this.handleChange}></input>
          <p>(payment method)</p>
          <button>Place Order</button>
        </form>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //getCart: (userId) => dispatch(getCart(userId)),
    getOrders: (userId) => dispatch(getOrders(userId)),
    addOrder: (order) => dispatch(addOrder(order))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
