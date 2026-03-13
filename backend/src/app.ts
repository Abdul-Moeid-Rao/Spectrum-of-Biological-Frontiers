import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import articleRoutes from './routes/article.route.js';
import submissionRoutes from './routes/submission.route.js';
import editorialRoutes from './routes/editorial.route.js';
import reviewRoutes from './routes/review.route.js';
import archiveRoutes from './routes/archive.route.js';
import paymentRoutes from './routes/payment.route.js';
import userRoutes from './routes/user.route.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/editorial', editorialRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/archives', archiveRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', userRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

export default app;
