import express from 'express';
import { createSubmission, getMySubmissions, uploadManuscript, submitArticle } from '../controllers/submission.controller.js';
import { authenticate } from '../middleware/authenticate.js';
import { validate } from '../middleware/validate.js';
import { upload } from '../middleware/upload.js';
import { articleSubmissionSchema } from '../schemas/article.schema.js';

const router = express.Router();

router.use(authenticate);

router.post('/', validate(articleSubmissionSchema), createSubmission);
router.get('/', getMySubmissions);
router.post('/:id/upload', upload.single('file'), uploadManuscript);
router.post('/:id/submit', submitArticle);

export default router;
