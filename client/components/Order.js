import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../store/order/order';
//const moment = require('moment');

let tempUserId = 1;

class Order extends React.Component {

  componentDidMount() {
    this.props.getOrders(this.props.userId);
  }

  render() {
    const { orders } = this.props;
    console.log(orders)
    if (orders.length < 1) {
      return <h1>You have no orders yet!</h1>
    } else {
      return (
        <div>
          <ul id="dogCards">
          {
            orders.map(order => {
              let cartItems = order.cart_items;
              return (
              <div id="dogCards" key={order.id}>
                {
                  cartItems.map(cartItem => {
                    return (
                    <li key={cartItem.id}>
                      <ul id="individualCards">
                        <li>
                          <img src={cartItem.pet.imageUrl} />
                        </li>
                        <li>Name: {cartItem.pet.name} </li>
                        <li>Price: ${cartItem.pet.price} </li>
                        <li>Ordered Date: {require('moment')(order.createdAt).format('YYYY-MM-DD')}</li>
                        <li></li>
                      </ul>
                    </li>
                  )})
                }
              </div>)
            })
          }
          </ul>
        </div>
      )
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.id,
    orders: state.orders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (userId) => dispatch(getOrders(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
