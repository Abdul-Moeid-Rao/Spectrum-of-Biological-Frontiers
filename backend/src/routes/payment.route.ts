import express from 'express';
import { startPaymentIntent, getPaymentStatus } from '../controllers/payment.controller.js';
import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

router.use(authenticate);

router.post('/create-intent', startPaymentIntent);
router.get('/:submissionId/status', getPaymentStatus);

export default router;
