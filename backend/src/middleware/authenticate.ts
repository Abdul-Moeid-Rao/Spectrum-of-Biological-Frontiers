import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler.js';
import { verifyAccessToken } from '../utils/jwt.js';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';

export const authenticate = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('You are not logged in! Please log in to get access.', 401));
  }

  const decoded = verifyAccessToken(token);

  const currentUser = await prisma.user.findUnique({
    where: { id: decoded.id }
  });

  if (!currentUser) {
    return next(new AppError('The user belonging to this token no longer exists.', 401));
  }

  req.user = currentUser;
  next();
});

export const authorize = (...roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.userType)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }
    next();
  };
};
