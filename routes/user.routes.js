import express from 'express';
import { handleUserlogin, handleUsersignUp } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', handleUsersignUp);

router.post('/login', handleUserlogin);


export default router;