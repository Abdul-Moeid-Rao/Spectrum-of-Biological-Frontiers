import { PrismaClient, Prisma } from '@prisma/client';
import logger from './logger.js';

const prisma = new PrismaClient({
  log: [
    { level: 'query', emit: 'event' },
    { level: 'error', emit: 'stdout' },
    { level: 'info', emit: 'stdout' },
    { level: 'warn', emit: 'stdout' },
  ],
});

prisma.$on('query', (e: Prisma.QueryEvent) => {
  logger.debug(`Query: ${e.query} - Params: ${e.params} - Duration: ${e.duration}ms`);
});

export default prisma;
