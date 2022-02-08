const db = require('../db');
const { Model, STRING, INTEGER, UUIDV4, UUID } = require('sequelize');

class Breed extends Model {};
Breed.init({
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
  stock: {
    type: INTEGER,
  },
}, { sequelize: db, modelName: 'breeds', timestamps: false });

module.exports = Breed;
