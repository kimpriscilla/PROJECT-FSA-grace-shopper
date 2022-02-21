const {
  STRING,
  ENUM,
  DATEONLY,
  NOW,
  DECIMAL,
  TEXT,
  Model,
  INTEGER,
} = require("sequelize");
const db = require("../db");

class Pet extends Model {}
Pet.init(
  {
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
      type: ENUM("Male", "Female"),
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
  },
  { sequelize: db, modelName: "pets", timestamps: false }
);

module.exports = Pet;
