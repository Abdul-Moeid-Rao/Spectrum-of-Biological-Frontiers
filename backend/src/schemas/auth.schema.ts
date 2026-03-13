import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  institution: z.string().optional(),
  department: z.string().optional(),
  country: z.string().optional(),
  orcidId: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const profileUpdateSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  institution: z.string().optional(),
  department: z.string().optional(),
  country: z.string().optional(),
  orcidId: z.string().optional(),
});
