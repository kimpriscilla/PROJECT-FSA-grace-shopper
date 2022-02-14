import React from "react";
import { connect } from "react-redux";
import { getOrders } from "../store/order/order";

class Confirmation extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return <div>single Confirmation</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //getOrders: (userId) => dispatch(getOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
