import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, MessageCircle } from 'lucide-react';
import PayPalButton from '../components/PayPalButton';
import toast from 'react-hot-toast';

interface MusicConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'birthday' | 'romantic' | 'party';
}

const MusicConfigModal: React.FC<MusicConfigModalProps> = ({
  isOpen,
  onClose,
  productType
}) => {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const styles = [
    { id: 'pop', name: 'Pop', description: 'Mélodies accrocheuses et modernes' },
    { id: 'rock', name: 'Rock', description: 'Énergie et guitares électriques' },
    { id: 'classical', name: 'Classique', description: 'Élégance et émotions profondes' },
    { id: 'hiphop', name: 'Hip-Hop', description: 'Rythmes urbains et paroles percutantes' },
    { id: 'blues', name: 'Blues', description: 'Sons mélancoliques et émotionnels' },
    { id: 'reggae', name: 'Reggae', description: 'Rythmes détendus et messages positifs' },
    { id: 'country', name: 'Country', description: 'Son authentique et racines américaines' },
    { id: 'folk', name: 'Folk', description: 'Mélodies simples et naturelles' },
    { id: 'metal', name: 'Metal', description: 'Guitares lourdes et énergie brute' },
  ];

  const handleNext = () => {
    if (!style) {
      toast.error('Veuillez choisir un style musical');
      return;
    }
    setStep(2);
  };

  const handlePaymentSuccess = async (details: any) => {
    try {
      setIsProcessing(true);
      
      if (!style || !message || !productType) {
        throw new Error('Informations manquantes');
      }

      const orderData = {
        paymentDetails: details,
        orderDetails: {
          style,
          message,
          productType
        }
      };

      sessionStorage.setItem('lastOrder', JSON.stringify(orderData));
      toast.success('Paiement réussi ! Vous allez recevoir un email de confirmation.');
      window.location.href = '/success';
    } catch (error) {
      console.error('Erreur lors de la finalisation:', error);
      toast.error('Erreur lors de la finalisation de la commande');
    } finally {
      setIsProcessing(false);
      onClose();
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setMessage(value);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {step === 1 ? 'Choisissez votre style' : 'Personnalisez votre musique'}
                </h2>
                <button 
                  onClick={onClose}
                  disabled={isProcessing}
                  className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {step === 1 ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {styles.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => !isProcessing && setStyle(s.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          style === s.id
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-300'
                        } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <div className="flex items-center space-x-2">
                          <Music className="h-5 w-5" />
                          <h3 className="font-medium">{s.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{s.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <button 
                      onClick={handleNext}
                      disabled={!style || isProcessing}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <MessageCircle className="inline-block h-5 w-5 mr-1" />
                        Votre message personnalisé
                      </label>
                      <textarea
                        value={message}
                        onChange={handleMessageChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        rows={4}
                        placeholder="Décrivez ce que vous souhaitez..."
                        required
                        disabled={isProcessing}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        {message.length}/500 caractères
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Récapitulatif</h3>
                      <p className="text-sm text-gray-600">Style : {styles.find(s => s.id === style)?.name}</p>
                      <p className="text-lg font-bold mt-2">Total : 19,90 €</p>
                    </div>

                    {message.trim().length >= 10 ? (
                      <PayPalButton
                        amount="19.90"
                        onSuccess={handlePaymentSuccess}
                      />
                    ) : (
                      <div className="text-amber-600 bg-amber-50 p-4 rounded-md">
                        Veuillez écrire un message d'au moins 10 caractères pour continuer
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MusicConfigModal;