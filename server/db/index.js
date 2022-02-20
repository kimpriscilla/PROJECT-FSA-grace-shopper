//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");

const Order = require("./models/Order");

const Pet = require("./models/Pet");

const Breed = require("./models/Breed");

const CartItem = require("./models/CartItem");

const Wishlist = require('./models/Wishlist');

//order associations
User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(CartItem);
CartItem.belongsTo(Order);
Order.hasMany(Pet);
Pet.belongsTo(Order);

//pet
User.hasMany(Pet);
Pet.belongsTo(User);

//breed
Pet.belongsTo(Breed);
Breed.hasMany(Pet);

//cart items
CartItem.belongsTo(User);
User.hasMany(CartItem);
CartItem.belongsTo(Pet);
Pet.hasMany(CartItem);

module.exports = {
  db,
  models: {
    User,
    Order,
    Pet,
    Breed,
    CartItem,
    Wishlist
  },
};
