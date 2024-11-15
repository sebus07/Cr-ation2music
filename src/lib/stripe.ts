import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const createCheckoutSession = async (productId: string, config: MusicConfig) => {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe not initialized');

  const response = await fetch('https://creation2music.fr/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId,
      config,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Payment failed');
  }

  const session = await response.json();
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    throw new Error(result.error.message || 'Payment failed');
  }
};
