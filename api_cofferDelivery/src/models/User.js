const DataType = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
    id: {
        type: DataType.STRING,
        primaryKey: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
      },
      rule: {
        type: DataType.STRING,
        allowNull: false,

      },
      token: {
        type: DataType.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false,
      },
});

User.sync({alter: true})

module.exports = User