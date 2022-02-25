import React from "react";
import { connect } from "react-redux";
import { deleteCart, getCart } from "../store/cart/cart";
import { Link } from "react-router-dom";

let tempUserId = 1;

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userId: props.authId,
    };
  }
  async componentDidMount() {
    this.props.getCart(this.props.authId);
  }
  render() {
    const cartItems = this.props.cartItems;
    const authId = this.props.authId ? this.props.authId : null;
    // console.log(cartItems);
    return (
      // <div>
      //   <ul id="dogCards">
      //     {cartItems.map((cartItem) => (
      //       <li key={cartItem.id}>
      //         <ul id="individualCards">
      //           <li>
      //             <img src={cartItem.pet.imageUrl} />
      //           </li>
      //           <li>Name: {cartItem.pet.name} </li>
      //           <li>Price: ${cartItem.pet.price} </li>
      //           <li></li>
      //           <button
      //             classNameName="button-37"
      //             role="button"
      //             onClick={() =>
      //               this.props.deleteCart(this.state.userId, cartItem.id)
      //             }
      //           >
      //             Remove
      //           </button>
      //         </ul>
      //       </li>
      //     ))}
      //   </ul>

      //   <Link to={`/checkout/${authId ? authId : "guest"}`}>
      //     <button classNameName="button-37" role="button">
      //       Check Out
      //     </button>
      //   </Link>
      // </div>
      <>
        <div
          className="container px-3 my-5 clearfix"
          style={{ fontFamily: "dosis" }}
        >
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Shopping Cart</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered m-0">
                  <thead>
                    <tr>
                      <th
                        className="text-center py-3 px-4"
                        style={{ minWidth: 400 + "px" }}
                      >
                        Product Name &amp; Details
                      </th>
                      <th
                        className="text-right py-3 px-4"
                        style={{ width: 200 + "px" }}
                      >
                        Price
                      </th>

                      <th
                        className="text-center align-middle py-3 px-0"
                        style={{ width: 100 + "px" }}
                      >
                        <a
                          href="#"
                          className="shop-tooltip float-none text-light"
                          title=""
                          data-original-title="Clear cart"
                        >
                          <i className="ino ion-md-trash"></i>
                        </a>
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cartItem) => (
                      <tr>
                        <td className="p-4">
                          <div className="media align-items-center">
                            <img
                              src={cartItem.pet.imageUrl}
                              style={{ width: 400 + "px", height: 400 + "px" }}
                            />
                            <div className="media-body">
                              <a href="#" className="d-block text-dark">
                                <span style={{ fontSize: 175 + "%" }}>
                                  {" "}
                                  {cartItem.pet.name}
                                </span>
                              </a>
                              <small>
                                <span
                                  className="text-muted"
                                  style={{
                                    fontSize: 18 + "px",
                                    fontWeight: 600,
                                  }}
                                >
                                  Gender:
                                </span>
                                <span style={{ fontSize: 15 + "px" }}>
                                  {cartItem.pet.gender}
                                </span>
                                <span
                                  className="ui-product-color ui-product-color-sm align-text-bottom"
                                  style={{ background: "#e81e2c" }}
                                ></span>{" "}
                                &nbsp;
                                <span
                                  className="text-muted"
                                  style={{
                                    fontSize: 18 + "px",
                                    fontWeight: 600,
                                  }}
                                >
                                  Size:{" "}
                                </span>{" "}
                                <span style={{ fontSize: 15 + "px" }}>
                                  {cartItem.pet.size}
                                </span>
                                &nbsp;
                              </small>
                            </div>
                          </div>
                        </td>
                        <td
                          className="text-right font-weight-semibold align-middle p-4"
                          style={{ fontSize: 150 + "%" }}
                        >
                          ${cartItem.pet.price}
                        </td>
                        <td className="align-middle p-4">
                          <button
                            type="button"
                            className="btn btn-outline-warning btn-md rounded-pill"
                            onClick={() =>
                              this.props.deleteCart(
                                this.state.userId,
                                cartItem.id
                              )
                            }
                          >
                            Remove
                          </button>
                        </td>
                        {/* <td className="text-right font-weight-semibold align-middle p-4">
                          $115.1
                        </td> */}
                        {/* <td className="text-center align-middle px-0">
                          <a
                            href="#"
                            className="shop-tooltip close float-none text-danger"
                            title=""
                            data-original-title="Remove"
                          >
                            ×
                          </a>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
                <div className="mt-4"></div>
                <div className="d-flex">
                  <div className="text-right mt-4 mr-5"></div>
                  <div className="text-right mt-4">
                    <label
                      className="text-muted font-weight-normal m-0"
                      style={{ fontSize: 25 + "px" }}
                    >
                      Total price
                    </label>
                    <div className="text-large">
                      <strong style={{ fontSize: 30 + "px" }}>
                        $
                        {cartItems.reduce((acc, curr) => {
                          return (acc += curr.pet.price * 1);
                        }, 0)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-right">
                <button
                  type="button"
                  className="btn btn-outline-warning btn-md rounded-pill"
                >
                  Back to shopping
                </button>
                {/* <a href={`/checkout/${authId ? authId : "guest"}`}> */}
                <Link to={`/checkout/${authId ? authId : "guest"}`}>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-md rounded-pill"
                  >
                    Proceed to Check Out
                  </button>
                  {/* </a> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cartItems,
    authId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCart: (userId, cartItemId) =>
      dispatch(deleteCart(userId, cartItemId)),
    getCart: (userId) => dispatch(getCart(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
