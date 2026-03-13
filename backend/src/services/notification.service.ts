import { Server } from 'socket.io';
import logger from '../utils/logger.js';

let io: Server;

export const initNotificationService = (socketIo: Server) => {
  io = socketIo;
};

export const notifyUser = (userId: string, event: string, data: any) => {
  if (io) {
    io.to(userId).emit(event, data);
    logger.info(`Notification sent to User ${userId}: ${event}`);
  }
};

export const notifyAll = (event: string, data: any) => {
  if (io) {
    io.emit(event, data);
  }
};
