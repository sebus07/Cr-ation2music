import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Download, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-xl text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-8"
        >
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                1. Produits et Services
              </h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Musiques Personnalisées propose la création de musiques personnalisées
                dans trois catégories :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Musique d'anniversaire</li>
                <li>Musique romantique</li>
                <li>Musique pour les fêtes</li>
              </ul>
              <p>
                Chaque création est unique et personnalisée selon les informations
                fournies par le client via le formulaire de personnalisation.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                2. Délais et Livraison
              </h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Le délai de livraison est de 4 jours ouvrés à compter de la réception
                des informations de personnalisation complètes.
              </p>
              <p>
                Une première proposition sera envoyée par email. Le client pourra
                demander une modification gratuite.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Download className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                3. Produits Numériques
              </h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Les musiques personnalisées sont des produits numériques livrés par
                voie électronique. En tant que tels :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Aucun remboursement n'est possible une fois le processus de
                  création commencé
                </li>
                <li>
                  Les fichiers sont fournis en format MP3 haute qualité
                </li>
                <li>
                  Le client dispose d'une licence d'utilisation personnelle
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                4. Propriété Intellectuelle
              </h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Les droits d'auteur sur les compositions musicales restent la
                propriété de Musiques Personnalisées.
              </p>
              <p>
                Le client reçoit une licence d'utilisation personnelle non
                exclusive et non transférable.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;