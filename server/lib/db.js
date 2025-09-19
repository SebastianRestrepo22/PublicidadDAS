import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false // desactiva logs SQL 
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa con MySQL');
    await sequelize.sync(); // crea tablas si no existen
  } catch (error) {
    console.error('Error de conexión con MySQL:', error);
    process.exit(1);
  }
};

export default sequelize;
