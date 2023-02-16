import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';

export const Order = sequelize.define('orders', {
  products: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  underscore: true
});


