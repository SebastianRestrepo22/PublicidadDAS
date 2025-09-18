import express from 'express';
import cors from 'cors';
import autRouter from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/auth', autRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is running')
}); //El servidor escuchara en el puerto 3000