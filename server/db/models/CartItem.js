const db = require("../db");
const { STRING } = require("sequelize");
const { Model } = require("sequelize");

class cartItem extends Model {}
cartItem.init(
  {
    authId: {
      type: STRING,
    },
  },
  { sequelize: db, modelName: "cart_items", timestamps: false }
);

module.exports = cartItem;
