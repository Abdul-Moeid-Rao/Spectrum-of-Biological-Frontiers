import Stripe from 'stripe';
import logger from '../utils/logger.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-02-25.clover',
});

export const createPaymentIntent = async (amount: number, currency: string = 'usd', articleId: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // amount in cents
      currency,
      metadata: { articleId },
    });
    return paymentIntent;
  } catch (error) {
    logger.error('Error creating Stripe PaymentIntent:', error);
    throw error;
  }
};

export const verifyWebhookSignature = (payload: any, signature: string) => {
  return stripe.webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET || ''
  );
};
