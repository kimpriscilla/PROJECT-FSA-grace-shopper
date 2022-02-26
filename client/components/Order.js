import React from "react";
import { connect } from "react-redux";
import { getOrders } from "../store/order/order";
//const moment = require('moment');

let tempUserId = 1;

class Order extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.userId);
  }

  render() {
    const { orders } = this.props;

    if (orders.length < 1) {
      return <h1>You have no orders yet!</h1>;
    } else {
      return (
        // <div style={{ fontFamily: "dosis" }}>
        //   <h1 className="text-center">Order History</h1>
        //   <ul id="dogCards">
        //     {orders.map((order) => {
        //       let cartItems = order.cart_items;
        //       return (
        //         <div id="dogCards" key={order.id}>
        //           {cartItems.map((cartItem) => {
        //             return (
        //               <li key={cartItem.id}>
        //                 <ul id="individualCards">
        //                   <li>
        //                     <img src={cartItem.pet.imageUrl} />
        //                   </li>
        //                   <li>Name: {cartItem.pet.name} </li>
        //                   <li>Price: ${cartItem.pet.price} </li>
        //                   <li>
        //                     Ordered Date:{" "}
        //                     {require("moment")(order.createdAt).format(
        //                       "YYYY-MM-DD"
        //                     )}
        //                   </li>
        //                   <li></li>
        //                 </ul>
        //               </li>
        //             );
        //           })}
        //         </div>
        //       );
        //     })}
        //   </ul>
        // </div>
        <>
          <div style={{ fontFamily: "dosis" }}>
            <h1 className="text-center">ORDER HISTORY</h1>

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-uppercase mb-0">
                        {/* Manage users */}
                      </h5>
                    </div>
                    <div className="table-responsive">
                      <table className="table no-wrap user-table mb-0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="border-0 text-uppercase font-medium pl-4"
                            >
                              NAME
                            </th>
                            <th
                              scope="col"
                              className="border-0 text-uppercase font-medium"
                            >
                              PRICE
                            </th>
                            <th
                              scope="col"
                              className="border-0 text-uppercase font-medium"
                            >
                              ORDERED DATE
                            </th>

                            {/* <th
                              scope="col"
                              className="border-0 text-uppercase font-medium"
                            >
                              Manage
                            </th> */}
                          </tr>
                        </thead>

                        {orders.map((order) => {
                          let cartItems = order.cart_items;
                          return (
                            <tbody>
                              {cartItems.map((cartItem) => {
                                return (
                                  <>
                                    <tr key={cartItem.id}>
                                      <td className="pl-4">
                                        <img
                                          src={cartItem.pet.imageUrl}
                                          style={{
                                            height: 200 + "px",
                                            width: 200 + "px",
                                          }}
                                        />
                                      </td>

                                      <td>
                                        <h5 className="font-medium mb-0">
                                          {cartItem.pet.price}
                                        </h5>
                                      </td>
                                      <td>
                                        <span
                                          className="text-muted"
                                          style={{ fontSize: 120 + "%" }}
                                        >
                                          {require("moment")(
                                            order.createdAt
                                          ).format("YYYY-MM-DD")}
                                        </span>
                                        <br />
                                      </td>
                                      {/* <td>
                                          <div className="btn-group">
                                            <a
                                              className="nav-link active"
                                              aria-current="page"
                                              // href={`/user/edit/${user.id}`}
                                            >
                                              <i className="bi- bi-pen"></i>
                                            </a>
                                          </div>

                                          <button
                                            type="button"
                                            className="btn btn-outline-info btn-circle btn-md btn-circle ml-2"
                                            style={{
                                              margin: 5 + "px",
                                              border: "none",
                                              color: "red",
                                            }}
                                          >
                                            <i className="bi bi-trash"></i>{" "}
                                          </button>
                                        </td> */}
                                    </tr>
                                  </>
                                );
                              })}
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.id,
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (userId) => dispatch(getOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
