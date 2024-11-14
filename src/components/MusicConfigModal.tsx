import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface MusicStyle {
  id: string;
  name: string;
}

interface MusicConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (config: { style: string; message: string }) => void;
  productType: 'birthday' | 'romantic' | 'party';
}

const musicStyles: MusicStyle[] = [
  { id: 'pop', name: 'Pop' },
  { id: 'rock', name: 'Rock' },
  { id: 'classical', name: 'Classique' },
  { id: 'hiphop', name: 'Hip-Hop' },
  { id: 'reggae', name: 'Reggae' },
  { id: 'country', name: 'Country' },
  { id: 'rnb', name: 'R&B' },
  { id: 'funk', name: 'Funk' },
];

const MusicConfigModal: React.FC<MusicConfigModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  productType,
}) => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [message, setMessage] = useState('');

  const getMessagePlaceholder = () => {
    const placeholders = {
      birthday: 'Ex: "Joyeux anniversaire Marie ! Pour tes 30 ans..."',
      romantic: 'Ex: "Mon amour, depuis notre rencontre..."',
      party: 'Ex: "Pour célébrer les 10 ans de notre entreprise..."',
    };
    return placeholders[productType];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStyle || !message) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    onSubmit({ style: selectedStyle, message });
    setSelectedStyle('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Personnalisez votre musique</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Sélection du style musical */}
                <div className="mb-6">
                  <label htmlFor="musicStyle" className="block text-lg font-medium mb-2">
                    Style musical
                  </label>
                  <select
                    id="musicStyle"
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="" disabled>
                      Sélectionnez un style musical
                    </option>
                    {musicStyles.map((style) => (
                      <option key={style.id} value={style.id}>
                        {style.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message personnalisé */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-lg font-medium mb-2">
                    <MessageCircle className="inline-block h-5 w-5 mr-2" />
                    Votre message personnalisé
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={getMessagePlaceholder()}
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border rounded-md"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md"
                  >
                    Continuer
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MusicConfigModal;
