import { DataTypes } from 'sequelize';
const sequelize = require('../config/db');

const Role = sequelize.define('roles', {
  id: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,// Genera un UUID automáticamente
    primaryKey: true  
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Role;