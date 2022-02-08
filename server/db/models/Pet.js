const {
  UUID,
  UUIDV4,
  STRING,
  ENUM,
  DATEONLY,
  NOW,
  DECIMAL,
  INTEGER,
  TEXT
} = require("sequelize");
const db = require("../db");

const Pet = db.define("pet", {
  name: {
    type: STRING,
  },
  price: {
    type: DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  description: {
    type: TEXT,
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
    defaultValue: "/default.png",
  },
});

module.exports = Pet;
