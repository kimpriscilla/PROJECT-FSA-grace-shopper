const db = require("../db");
const { Model, STRING, INTEGER, UUIDV4, UUID } = require("sequelize");

// class Order extends Model {};
// Order.init({
//   shippingAddress: {
//     type: STRING,
//   },
//   billingAddress: {
//     type: STRING,
//   },
// }, { sequelize: db, modelName: 'orders' });

class Order extends Model {}
Order.init(
  {
    sStreet: {
      type: STRING,
    },
    sCity: {
      type: STRING,
    },
    sZip: {
      type: STRING,
    },
    sState: {
      type: STRING,
    },
    bStreet: {
      type: STRING,
    },
    bCity: {
      type: STRING,
    },
    bZip: {
      type: STRING,
    },
    bState: {
      type: STRING,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Order;
