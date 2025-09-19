import { DataTypes } from 'sequelize';
import Role from './role.model.js';
import sequelize from '../lib/db.js';

const Usuario = sequelize.define(
  'Usuarios',
  {
    CedulaId: {
      type: DataTypes.STRING(20),
      primaryKey: true
    },
    NombreCompleto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Telefono: DataTypes.STRING(20),
    CorreoElectronico: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    Direccion: DataTypes.STRING(255),
    Contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  { timestamps: false }
);

Usuario.belongsTo(Role, { foreignKey: 'RoleId' });
Role.hasMany(Usuario, { foreignKey: 'RoleId' });

export default Usuario;
