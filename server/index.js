import express from 'express';
import cors from 'cors';
import autRouter from './routes/authRoutes.js';
import dotenv from 'dotenv';
import  proveedorRoutes from './routes/proveedores.routes.js';
import insumosRoutes from './routes/insumos.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';


dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/categorias', categoriaRoutes)
app.use('/api/proveedores', proveedorRoutes)
app.use('/api/insumos', insumosRoutes)
app.use('/auth', autRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is running')
}); 

