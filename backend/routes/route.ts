import express from 'express';
import AuthController from '../controllers/AuthController';
import MessageController from '../controllers/MessageController';
import { validateUser } from '../middleware/authenticate';

const router = express.Router();

router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);
router.get('/auth/me', validateUser, AuthController.me);
router.get('/auth/logout', validateUser, AuthController.logout);

router.post('/message', validateUser, MessageController.createMessage);

export default router;
