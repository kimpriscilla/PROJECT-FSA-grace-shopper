const db = require("../db");
const { Model } = require("sequelize");

class Wishlist extends Model {}
Wishlist.init({}, { sequelize: db, modelName: "wishlist", timestamps: false });

module.exports = Wishlist;
