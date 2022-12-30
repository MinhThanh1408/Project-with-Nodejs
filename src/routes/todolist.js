import express from 'express';
const router = express.Router();
import todolistController from '../app/controllers/TodolistController.js';

router.get('/', todolistController.index);

export default router;
