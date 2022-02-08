//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User');

const Order = require('./models/Order');

const Pet = require('./models/Pet');

const Breed = require('./models/Breed');

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Pet);
Pet.belongsTo(Breed);
Breed.hasMany(Pet);

module.exports = {
  db,
  models: {
    User,
    Order,
    Pet,
    Breed
  },
}
