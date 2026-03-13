import nodemailer from 'nodemailer';
import logger from '../utils/logger.js';

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'office@spectrumjournal.org',
      to,
      subject,
      html,
    });
    logger.info(`Email sent to ${to}`);
  } catch (error) {
    logger.error(`Error sending email to ${to}:`, error);
  }
};

// Templates
export const getVerificationEmail = (name: string, token: string) => {
  const url = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  return `
    <h1>Verify Your Email</h1>
    <p>Dear ${name},</p>
    <p>Please click the link below to verify your email address for Spectrum of Biological Frontiers.</p>
    <a href="${url}">${url}</a>
  `;
};

export const getStatusUpdateEmail = (title: string, status: string) => {
  return `
    <h1>Article Status Updated</h1>
    <p>Your article "${title}" has been updated to: <strong>${status}</strong>.</p>
  `;
};
