import express from 'express';

import { getAllUsers } from '../controllers/getUsers.controllers';

const router = express.Router();

// Get Request
router.get('/', getAllUsers);

export default router;
