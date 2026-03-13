import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import logger from './utils/logger.js';
import connectDB from './utils/mongodb.js';
import dotenv from 'dotenv';

dotenv.config();

// Connect to Database
connectDB();

const port = process.env.PORT || 5000;
const server = http.createServer(app);

import { initNotificationService } from './services/notification.service.js';

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

initNotificationService(io);

io.on('connection', (socket) => {
  logger.info(`User connected: ${socket.id}`);

  socket.on('join', (userId: string) => {
    socket.join(userId);
    logger.info(`User ${userId} joined room`);
  });

  socket.on('disconnect', () => {
    logger.info(`User disconnected: ${socket.id}`);
  });
});

// Attach io to app to use in controllers/services if needed
app.set('io', io);

server.listen(port, () => {
  logger.info(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
});

process.on('unhandledRejection', (err: any) => {
  logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
