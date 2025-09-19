import express from 'express';
import cors from 'cors';
import autRouter from './routes/authRoutes.js';
import dotenv from 'dotenv';
import proveedoresRoutes from '/routes/proveedores.js';
import categoriasRoutes from '/routes/categoriasRoutes';
import insumosRoutes from '/routes/insumosRoutes';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/proveedores' , proveedoresRoutes);
app.use('/api/categorias' , categoriasRoutes);
app.use('/api/insumos' , insumosRoutes);

app.use('/auth', autRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is running')
}); //El servidor escuchara en el puerto 3000