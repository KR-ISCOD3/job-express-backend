import express from 'express';
import { create, destroy, getAll, getSingleData, update } from '../controllers/categoryController.js';

const categoryrouter = express.Router();

categoryrouter.get('/category',getAll);
categoryrouter.post('/category',create)
categoryrouter.put('/category/:id',update);
categoryrouter.delete('/category/:id',destroy)
categoryrouter.get('/category/:id',getSingleData)

export default categoryrouter;