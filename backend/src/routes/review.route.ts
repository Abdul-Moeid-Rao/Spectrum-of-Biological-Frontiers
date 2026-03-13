import express from 'express';
import { getAssignedReviews, respondToReview, submitReview } from '../controllers/review.controller.js';
import { authenticate, authorize } from '../middleware/authenticate.js';

const router = express.Router();

router.use(authenticate);
router.use(authorize('REVIEWER', 'EDITOR', 'ADMIN'));

router.get('/assigned', getAssignedReviews);
router.put('/:id/respond', respondToReview);
router.put('/:id/submit', submitReview);

export default router;
