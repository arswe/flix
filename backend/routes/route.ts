import express from 'express';
import AuthController from '../controllers/AuthController';
import { validateUser } from '../middleware/authenticate';

const router = express.Router();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);
router.post('/auth/me', validateUser, AuthController.me);

export default router;
