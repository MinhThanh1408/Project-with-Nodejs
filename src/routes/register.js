import express from 'express';
const router = express.Router();
import registerController from '../app/controllers/RegisterController.js';

router.get('/', registerController.index);

export default router;
