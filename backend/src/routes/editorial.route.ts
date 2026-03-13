import express from 'express';
import { getAllSubmissions, updateSubmissionStatus, getReviewers, assignReviewer } from '../controllers/editorial.controller.js';
import { authenticate, authorize } from '../middleware/authenticate.js';

const router = express.Router();

router.use(authenticate);
router.use(authorize('EDITOR', 'ADMIN'));

router.get('/submissions', getAllSubmissions);
router.put('/submissions/:id/status', updateSubmissionStatus);
router.get('/reviewers', getReviewers);
router.post('/submissions/:id/assign-reviewer', assignReviewer);

export default router;
