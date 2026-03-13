import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getVolumes = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const volumes = await prisma.article.groupBy({
    by: ['volume'],
    where: { status: 'PUBLISHED' },
    _count: { id: true },
    orderBy: { volume: 'desc' }
  });

  res.status(200).json({ status: 'success', data: { volumes } });
});

export const getIssuesInVolume = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const volume = parseInt(req.params.volume);
  const issues = await prisma.article.groupBy({
    by: ['issue'],
    where: { status: 'PUBLISHED', volume },
    _count: { id: true },
    orderBy: { issue: 'asc' }
  });

  res.status(200).json({ status: 'success', data: { issues } });
});

export const getArticlesInIssue = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const volume = parseInt(req.params.volume);
  const issue = parseInt(req.params.issue);

  const articles = await prisma.article.findMany({
    where: { status: 'PUBLISHED', volume, issue },
    include: { coAuthors: true }
  });

  res.status(200).json({ status: 'success', data: { articles } });
});
