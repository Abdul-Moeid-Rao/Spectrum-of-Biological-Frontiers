import { z } from 'zod';

export const articleSubmissionSchema = z.object({
  title: z.string().min(10).max(255),
  abstract: z.string().min(100).max(5000),
  keywords: z.array(z.string()).min(3),
  category: z.string().optional(),
  authors: z.array(z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    institution: z.string().optional(),
    orcidId: z.string().optional(),
    order: z.number()
  })).min(1),
});

export const updateArticleSchema = articleSubmissionSchema.partial();
