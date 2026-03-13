import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../middleware/errorHandler.js';
import { sendEmail, getStatusUpdateEmail } from '../services/email.service.js';

export const getAllSubmissions = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { status, authorId } = req.query;
  const where: any = {};
  if (status) where.status = status;
  if (authorId) where.correspondingAuthorId = authorId;

  const submissions = await prisma.article.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: { correspondingAuthor: true }
  });

  res.status(200).json({ status: 'success', data: { submissions } });
});

export const updateSubmissionStatus = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { status } = req.body;
  const article = await prisma.article.update({
    where: { id: req.params.id },
    data: { status },
    include: { correspondingAuthor: true }
  });

  // Notify author
  await sendEmail(
    article.correspondingAuthor.email,
    'Article Status Update',
    getStatusUpdateEmail(article.title, status)
  );

  // Real-time notification if possible (io is attached to app)
  const io = req.app.get('io');
  if (io) {
    io.to(article.correspondingAuthorId).emit('submission:status-updated', {
      articleId: article.id,
      status
    });
  }

  res.status(200).json({ status: 'success', data: { article } });
});

export const getReviewers = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const reviewers = await prisma.user.findMany({
    where: { userType: 'REVIEWER' },
    select: { id: true, firstName: true, lastName: true, institution: true, email: true }
  });

  res.status(200).json({ status: 'success', data: { reviewers } });
});

export const assignReviewer = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { reviewerId, dueDate } = req.body;
  const articleId = req.params.id;

  const review = await prisma.review.create({
    data: {
      articleId,
      reviewerId,
      dueDate: new Date(dueDate),
      status: 'PENDING'
    }
  });

  // Notify reviewer... (omitted for brevity)

  res.status(201).json({ status: 'success', data: { review } });
});
