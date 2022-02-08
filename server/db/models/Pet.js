const { UUID, UUIDV4, STRING, ENUM, DATEONLY, NOW, DECIMAL, INTEGER } = require('sequelize');
const db = require('../db');

const Pet = db.define('pet', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    price: {
        type: DECIMAL(10, 2),
        defaultValue: 0.00,
    },
    description: {
        type: STRING,
        allowNull: true,
    },
    breed: {
        type: STRING,
    },
    gender: {
        type: ENUM('male', 'female'),
    },
    size: {
        type: ENUM('small', 'medium', 'large'),
    },
    dateOfBirth: {
        type: DATEONLY,
        allowNull: false,
        defaultValue: NOW,
    },
    imageUrl: {
        type: STRING,
        defaultValue: '/public/default.png',
    },
    stock: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
});

module.exports = Pet;