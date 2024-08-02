import express from 'express';
import { createUser, getOperationCode } from '../controllers/userController.js';

const router = express.Router();


router.post('/', createUser);


router.get('/', getOperationCode);

export default router;
