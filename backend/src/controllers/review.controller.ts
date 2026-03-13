import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../middleware/errorHandler.js';

export const getAssignedReviews = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const reviews = await prisma.review.findMany({
    where: { reviewerId: req.user.id },
    include: { article: { select: { title: true, abstract: true, category: true } } }
  });

  res.status(200).json({ status: 'success', data: { reviews } });
});

export const respondToReview = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { status } = req.body; // ACCEPTED or DECLINED
  const reviewId = req.params.id;

  const review = await prisma.review.update({
    where: { id: reviewId, reviewerId: req.user.id },
    data: { status }
  });

  res.status(200).json({ status: 'success', data: { review } });
});

export const submitReview = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { recommendation, comments, confidentialComments } = req.body;
  const reviewId = req.params.id;

  const review = await prisma.review.update({
    where: { id: reviewId, reviewerId: req.user.id },
    data: {
      recommendation,
      comments,
      confidentialComments,
      status: 'COMPLETED',
      completedDate: new Date()
    }
  });

  res.status(200).json({ status: 'success', data: { review } });
});
