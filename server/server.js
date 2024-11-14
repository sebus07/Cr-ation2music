import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json());

const PRODUCTS = {
  birthday: {
    price: 1990,
    name: "Musique d'Anniversaire Personnalisée",
    description: "Une mélodie unique pour célébrer ce jour spécial",
  },
  romantic: {
    price: 1990,
    name: "Musique Romantique Personnalisée",
    description: "Exprimez vos sentiments en musique",
  },
  party: {
    price: 1990,
    name: "Musique de Fête Personnalisée",
    description: "Créez l'ambiance parfaite pour votre événement",
  }
};

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { productId, config } = req.body;
    
    if (!productId || !config) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    const product = PRODUCTS[productId];
    if (!product) {
      return res.status(400).json({ error: 'Produit non trouvé' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              description: `Style musical : ${config.style}\nMessage personnalisé : ${config.message}`,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/products`,
      metadata: {
        productId,
        style: config.style,
        message: config.message,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Erreur Stripe:', error);
    res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});