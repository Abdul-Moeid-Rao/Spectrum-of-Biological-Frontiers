import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../middleware/errorHandler.js';
import { uploadFile } from '../services/storage.service.js';
import logger from '../utils/logger.js';

export const createSubmission = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { title, abstract, keywords, category, authors } = req.body;

  const article = await prisma.article.create({
    data: {
      title,
      abstract,
      keywords,
      category,
      correspondingAuthorId: req.user.id,
      coAuthors: {
        create: authors.map((author: any) => ({
          firstName: author.firstName,
          lastName: author.lastName,
          email: author.email,
          institution: author.institution,
          orcidId: author.orcidId,
          order: author.order
        }))
      }
    },
    include: {
      coAuthors: true
    }
  });

  res.status(201).json({
    status: 'success',
    data: { article }
  });
});

export const getMySubmissions = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const articles = await prisma.article.findMany({
    where: { correspondingAuthorId: req.user.id },
    orderBy: { createdAt: 'desc' }
  });

  res.status(200).json({
    status: 'success',
    results: articles.length,
    data: { articles }
  });
});

export const uploadManuscript = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  if (!req.file) {
    return next(new AppError('Please upload a file', 400));
  }

  const articleId = req.params.id;
  const article = await prisma.article.findUnique({ where: { id: articleId } });

  if (!article) {
    return next(new AppError('Article not found', 404));
  }

  if (article.correspondingAuthorId !== req.user.id && req.user.userType !== 'EDITOR' && req.user.userType !== 'ADMIN') {
    return next(new AppError('You do not have permission to upload files for this article', 403));
  }

  const key = await uploadFile(req.file, 'manuscripts');

  const updatedArticle = await prisma.article.update({
    where: { id: articleId },
    data: { manuscriptUrl: key }
  });

  res.status(200).json({
    status: 'success',
    message: 'Manuscript uploaded successfully',
    data: { article: updatedArticle }
  });
});

export const submitArticle = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const articleId = req.params.id;
  
  const article = await prisma.article.findUnique({ 
    where: { id: articleId },
    include: { coAuthors: true }
  });

  if (!article) return next(new AppError('Article not found', 404));
  if (article.correspondingAuthorId !== req.user.id) return next(new AppError('Unauthorized', 403));

  if (!article.manuscriptUrl) {
    return next(new AppError('Please upload the manuscript before submitting', 400));
  }

  const updatedArticle = await prisma.article.update({
    where: { id: articleId },
    data: { 
      status: 'SUBMITTED',
      submissionDate: new Date()
    }
  });

  logger.info(`Article submitted: ${articleId}`);

  res.status(200).json({
    status: 'success',
    message: 'Article submitted successfully for review',
    data: { article: updatedArticle }
  });
});
