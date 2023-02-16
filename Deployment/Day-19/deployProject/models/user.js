import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';
import { Order } from './order.js';

export const User = sequelize.define('users', {
  emailId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  underscore: true
});

User.hasMany( Order, {
  foreignKey: "userId",
  onDelete: "cascade"
});
Order.belongsTo(User,{
  foreignKey: "userId"
})