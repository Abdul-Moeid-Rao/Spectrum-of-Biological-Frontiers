import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../middleware/errorHandler.js';
import { hashPassword } from '../utils/password.js';

export const getProfile = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    data: { user: req.user }
  });
});

export const updateProfile = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const updatedUser = await prisma.user.update({
    where: { id: req.user.id },
    data: req.body
  });

  res.status(200).json({
    status: 'success',
    data: { user: updatedUser }
  });
});

export const changePassword = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { oldPassword, newPassword } = req.body;

  // Verify old password (logic omitted, but similar to login)
  
  const passwordHash = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: req.user.id },
    data: { passwordHash }
  });

  res.status(200).json({
    status: 'success',
    message: 'Password updated successfully'
  });
});

export const getDashboardStats = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const stats = await prisma.article.groupBy({
    by: ['status'],
    where: { correspondingAuthorId: req.user.id },
    _count: { id: true }
  });

  res.status(200).json({
    status: 'success',
    data: { stats }
  });
});
