import React, { useState } from 'react';
import { createCheckoutSession } from '../lib/stripe';
import toast from 'react-hot-toast';
import { ArrowRight, Loader2 } from 'lucide-react';

interface PaymentButtonProps {
  productId: string;
  className?: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ productId, className }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      await createCheckoutSession(productId);
    } catch (error) {
      console.error('Erreur de paiement:', error);
      toast.error("Une erreur est survenue lors du paiement. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`${className || "btn-primary"} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin mr-2" />
          Chargement...
        </>
      ) : (
        <>
          Commander
          <ArrowRight className="ml-2 h-5 w-5" />
        </>
      )}
    </button>
  );
};