import { Response, NextFunction } from 'express';
import prisma from '../utils/prisma.js';
import { catchAsync } from '../utils/catchAsync.js';
import { AppError } from '../middleware/errorHandler.js';
import { getDownloadUrl } from '../services/storage.service.js';

export const getArticles = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const { category, keyword, author, year, volume, issue } = req.query;

  const where: any = { status: 'PUBLISHED' };
  
  if (category) where.category = category;
  if (keyword) where.keywords = { has: keyword };
  if (year) where.publicationDate = {
    gte: new Date(`${year}-01-01`),
    lte: new Date(`${year}-12-31`)
  };
  if (volume) where.volume = parseInt(volume);
  if (issue) where.issue = parseInt(issue);

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      skip,
      take: limit,
      orderBy: { publicationDate: 'desc' },
      include: { 
        correspondingAuthor: { select: { firstName: true, lastName: true, institution: true } },
        coAuthors: true
      }
    }),
    prisma.article.count({ where })
  ]);

  res.status(200).json({
    status: 'success',
    total,
    page,
    totalPages: Math.ceil(total / limit),
    data: { articles }
  });
});

export const getArticle = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const article = await prisma.article.findUnique({
    where: { id: req.params.id },
    include: { 
      correspondingAuthor: { select: { firstName: true, lastName: true, institution: true } },
      coAuthors: true
    }
  });

  if (!article) return next(new AppError('Article not found', 404));

  // Increment view count
  await prisma.article.update({
    where: { id: req.params.id },
    data: { viewCount: { increment: 1 } }
  });

  res.status(200).json({
    status: 'success',
    data: { article }
  });
});

export const downloadManuscript = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const article = await prisma.article.findUnique({ where: { id: req.params.id } });
  
  if (!article || !article.manuscriptUrl) {
    return next(new AppError('Manuscript not found', 404));
  }

  // Increment download count
  await prisma.article.update({
    where: { id: req.params.id },
    data: { downloadCount: { increment: 1 } }
  });

  const url = await getDownloadUrl(article.manuscriptUrl);

  res.status(200).json({
    status: 'success',
    data: { downloadUrl: url }
  });
});
