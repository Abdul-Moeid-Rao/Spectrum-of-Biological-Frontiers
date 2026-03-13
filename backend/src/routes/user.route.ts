import express from 'express';
import { getProfile, updateProfile, changePassword, getDashboardStats } from '../controllers/user.controller.js';
import { authenticate } from '../middleware/authenticate.js';
import { validate } from '../middleware/validate.js';
import { profileUpdateSchema } from '../schemas/auth.schema.js';

const router = express.Router();

router.use(authenticate);

router.get('/profile', getProfile);
router.put('/profile', validate(profileUpdateSchema), updateProfile);
router.put('/change-password', changePassword);
router.get('/dashboard-stats', getDashboardStats);

export default router;
