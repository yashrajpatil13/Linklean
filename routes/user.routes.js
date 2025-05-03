import express from 'express';
import { handleUserlogin, handleUserLogout, handleUsersignUp } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', handleUsersignUp);

router.post('/login', handleUserlogin);

router.get('/logout', handleUserLogout);

export default router;