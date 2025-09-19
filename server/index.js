import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Routers
import authRouter from './routes/authRoutes.js';
import roleRouter from './routes/role.routes.js';

// DB
import { connectDB } from './lib/db.js';

// Models (import para que Sequelize los registre)
import './models/role.model.js';
import './models/user.model.js'; // si tienes modelo de Usuario

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/auth', authRouter);
app.use('/roles', roleRouter);

const startServer = async () => {
  try {
    await connectDB(); // Conecta y sincroniza la DB
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (err) {
    console.error('Error al iniciar el servidor:', err);
  }
};

startServer();
