import express from 'express';
import { getArticles, getArticle, downloadManuscript } from '../controllers/article.controller.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/:id/download', downloadManuscript);

export default router;
