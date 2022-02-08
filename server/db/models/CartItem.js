const db = require('../db');
const { Model } = require('sequelize');

class cartItem extends Model {};
cartItem.init({

}, { sequelize: db, modelName: 'cart_items', timestamps: false });

module.exports = cartItem;
