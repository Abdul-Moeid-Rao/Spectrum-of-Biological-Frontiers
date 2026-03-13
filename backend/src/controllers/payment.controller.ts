import { Response, NextFunction } from 'express';
import { catchAsync } from '../utils/catchAsync.js';
import { createPaymentIntent } from '../services/payment.service.js';
import prisma from '../utils/prisma.js';
import { AppError } from '../middleware/errorHandler.js';

export const startPaymentIntent = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { submissionId } = req.body;
  const article = await prisma.article.findUnique({ where: { id: submissionId } });

  if (!article) return next(new AppError('Article not found', 404));

  const amount = 150; // APC is $150
  const paymentIntent = await createPaymentIntent(amount, 'usd', submissionId);

  await prisma.payment.create({
    data: {
      articleId: submissionId,
      amount,
      stripePaymentIntentId: paymentIntent.id,
      status: 'PENDING'
    }
  });

  res.status(200).json({
    status: 'success',
    clientSecret: paymentIntent.client_secret
  });
});

export const getPaymentStatus = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const payment = await prisma.payment.findUnique({
    where: { articleId: req.params.submissionId }
  });

  if (!payment) return next(new AppError('Payment record not found', 404));

  res.status(200).json({ status: 'success', data: { status: payment.status } });
});
