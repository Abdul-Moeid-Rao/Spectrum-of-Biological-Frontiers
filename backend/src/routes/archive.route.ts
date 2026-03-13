import express from 'express';
import { getVolumes, getIssuesInVolume, getArticlesInIssue } from '../controllers/archive.controller.js';

const router = express.Router();

router.get('/volumes', getVolumes);
router.get('/volumes/:volume/issues', getIssuesInVolume);
router.get('/volumes/:volume/issues/:issue', getArticlesInIssue);

export default router;
