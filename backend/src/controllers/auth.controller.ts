import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../middleware/errorHandler.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.js';
import logger from '../utils/logger.js';

export const register = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName, institution, department, country, orcidId } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return next(new AppError('Email already in use', 409));
  }

  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      firstName,
      lastName,
      institution,
      department,
      country,
      orcidId,
    },
  });

  logger.info(`User registered: ${user.email}`);

  // In a real app, send verification email here
  
  res.status(201).json({
    status: 'success',
    message: 'User registered successfully. Please verify your email.',
    data: {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  });
});

export const login = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await comparePassword(password, user.passwordHash))) {
    return next(new AppError('Invalid email or password', 401));
  }

  const accessToken = generateAccessToken(user.id, user.userType);
  const refreshToken = generateRefreshToken(user.id);

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(200).json({
    status: 'success',
    token: accessToken,
    data: {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userType: user.userType,
      },
    },
  });
});

export const refresh = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const refreshToken = req.cookies.jwt;
  if (!refreshToken) {
    return next(new AppError('Refresh token missing', 401));
  }

  const decoded = verifyRefreshToken(refreshToken);
  const user = await prisma.user.findUnique({ where: { id: decoded.id } });

  if (!user) {
    return next(new AppError('User no longer exists', 401));
  }

  const accessToken = generateAccessToken(user.id, user.userType);

  res.status(200).json({
    status: 'success',
    token: accessToken,
  });
});

export const logout = (req: any, res: Response) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};
