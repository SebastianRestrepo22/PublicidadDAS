import { DataTypes } from 'sequelize';
import sequelize from '../lib/db.js';

const Role = sequelize.define('Role', {
  RoleId: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,// Genera un UUID automáticamente
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Estado: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),  // ENUM con dos opciones
    allowNull: false,
    defaultValue: 'Activo'
  }
}, {
  tableName: 'Roles',
  timestamps: false
});

export default Role;
