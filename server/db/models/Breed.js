const db = require("../db");
const { Model, STRING, INTEGER, UUIDV4, UUID } = require("sequelize");

class Breed extends Model {}

Breed.init(
  {
    name: {
      type: STRING,
    },
    imageUrl: {
      type: STRING,
      defaultValue: "/default.png",
    },
  },
  { sequelize: db, modelName: "breeds", timestamps: false }
);

module.exports = Breed;
