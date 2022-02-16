const db = require('../db');
const { Model, STRING, INTEGER, UUIDV4, UUID } = require('sequelize');

class Order extends Model {};
Order.init({
  shippingAddress: {
    type: STRING,
  },
  billingAddress: {
    type: STRING,
  },
}, { sequelize: db, modelName: 'orders' });

module.exports = Order;
