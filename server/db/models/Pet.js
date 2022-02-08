const {
  UUID,
  UUIDV4,
  STRING,
  ENUM,
  DATEONLY,
  NOW,
  DECIMAL,
  INTEGER,
} = require("sequelize");
const db = require("../db");

const Pet = db.define("pet", {
  price: {
    type: DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  description: {
    type: STRING,
    allowNull: true,
  },
  gender: {
    type: ENUM("male", "female"),
  },
  size: {
    type: ENUM("small", "medium", "large"),
  },
  dateOfBirth: {
    type: DATEONLY,
    allowNull: false,
    defaultValue: NOW,
  },
  imageUrl: {
    type: STRING,
    defaultValue: "/public/default.png",
  },
});

module.exports = Pet;
