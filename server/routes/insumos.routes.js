import express from 'express';
import {
  getAllInsumos,
  getInsumoById,
  createInsumo,
  deleteInsumo
} from '../controllers/insumos.controller.js';

const router = express.Router();

router.get('/', getAllInsumos);
router.get('/:id', getInsumoById);
router.post('/', createInsumo);
router.delete('/:id', deleteInsumo);

export default router;
