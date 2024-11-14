import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, PartyPopper, Clock, Check, ArrowRight, Music } from 'lucide-react';
import toast from 'react-hot-toast';
import MusicConfigModal from '../components/MusicConfigModal';
import AudioCard from '../components/AudioCard';

interface Product {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  image: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 'birthday',
      title: "Musique d'Anniversaire",
      icon: <Gift className="h-12 w-12 text-purple-600" />,
      description: "Une mélodie unique pour célébrer ce jour spécial",
      features: [
        "Paroles personnalisées avec le prénom",
        "Choix du style musical",
        "Livraison en 4 jours",
        "Une modification gratuite"
      ],
      image: "/images/ballon.webp"
    },
    {
      id: 'romantic',
      title: "Musique Romantique",
      icon: <Heart className="h-12 w-12 text-purple-600" />,
      description: "Exprimez vos sentiments en musique pour célébrer ce jour",
      features: [
        "Message d'amour personnalisé",
        "Ambiance romantique",
        "Livraison en 4 jours",
        "Une modification gratuite"
      ],
      image: "/images/romance.webp"
    },
    {
      id: 'party',
      title: "Musique pour les Fêtes",
      icon: <PartyPopper className="h-12 w-12 text-purple-600" />,
      description: "Créez l'ambiance parfaite pour votre événement",
      features: [
        "Thème personnalisé",
        "Style festif au choix",
        "Livraison en 4 jours",
        "Une modification gratuite"
      ],
      image: "/images/fetes.webp"
    }
  ];

  const musicSamples = [
    {
      title: "Joyeux Anniversaire Zoé",
      description: "Style pop moderne et enjoué",
      audioUrl: "/samples/birthday-pop.mp3"
    },
    {
      title: "Ballade Romantique Pour Rose",
      description: "Mélodie douce et romantique",
      audioUrl: "/samples/romantic-ballad.mp3"
    },
    {
      title: "Viens Faire Ta Music",
      description: "Rythme entraînant ",
      audioUrl: "/samples/party-groove.mp3"
    }
  ];

  const handlePurchase = (productId: string) => {
    setSelectedProduct(productId);
    setIsModalOpen(true);
  };

  const handleConfigSubmit = (config: { style: string; message: string }) => {
    toast.success('Configuration enregistrée ! Nous vous contacterons pour finaliser la commande.');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Créations Musicales
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque musique est créée sur mesure pour votre occasion spéciale,
              au prix unique de 19,90 €
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {product.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">19,90 €</span>
                  <button
                    onClick={() => handlePurchase(product.id)}
                    className="btn-primary"
                  >
                    Commander
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Livraison en 4 jours
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Exemples de Musiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Music className="h-8 w-8 mr-3 text-purple-600" />
              Écoutez nos Exemples
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques exemples de nos créations musicales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {musicSamples.map((sample, index) => (
              <AudioCard
                key={index}
                title={sample.title}
                description={sample.description}
                audioUrl={sample.audioUrl}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProduct && (
        <MusicConfigModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleConfigSubmit}
          productType={selectedProduct as 'birthday' | 'romantic' | 'party'}
        />
      )}
    </div>
  );
};

export default Products;