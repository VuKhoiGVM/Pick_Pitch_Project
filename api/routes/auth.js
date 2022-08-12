import express from 'express';
import { register, login } from '../controllers/auth.js';

const router = express.Router();
console.log("Auth") 
router.post('/register',register) // authentication usser
router.post('/login',login) // authentication usser
export default router