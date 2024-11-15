import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

// Composant interne qui gère les boutons PayPal
const ButtonWrapper: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {isPending ? (
        <div className="flex items-center justify-center space-x-2 p-4">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Chargement de PayPal...</span>
        </div>
      ) : (
        <PayPalButtons
          style={{
            layout: "vertical",
            shape: "rect",
            color: "gold"
          }}
          createOrder={(_data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount,
                  currency_code: "EUR"
                },
                description: "Musique Personnalisée"
              }]
            });
          }}
          onApprove={async (data, actions) => {
            try {
              const details = await actions.order.capture();
              onSuccess(details);
              return details;
            } catch (error) {
              console.error('Erreur capture PayPal:', error);
              toast.error('Erreur lors de la finalisation du paiement');
              throw error;
            }
          }}
          onError={(err) => {
            console.error('Erreur PayPal:', err);
            toast.error('Une erreur est survenue avec PayPal');
          }}
          onCancel={() => {
            toast.error('Paiement annulé');
          }}
        />
      )}
    </>
  );
};

// Composant principal qui configure PayPal
const PayPalButton: React.FC<PayPalButtonProps> = (props) => {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      console.error('Client ID PayPal manquant');
      toast.error('Erreur de configuration PayPal');
    }
  }, [clientId]);

  if (!clientId) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-md">
        Erreur de configuration PayPal
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientId,
        currency: "EUR",
        intent: "capture"
      }}
    >
      <ButtonWrapper {...props} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;