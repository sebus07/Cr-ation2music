import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, FileText, UserCheck } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
            <p>Dernière mise à jour : 14/11/2024</p><br></br>
          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold">Présentation du site</h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p><strong>Site web :</strong> creation2music.fr</p>
              <p><strong>Directeur de la publication :</strong> Koenig Sébastien</p>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold">Hébergement</h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p><strong>Hébergeur :</strong> o2switch</p>
              <p>222-224 Boulevard Gustave Flaubert</p>
              <p>63000 Clermont-Ferrand</p>
              <p>Tél : 04 44 44 60 40</p>
              <p>Site web : www.o2switch.fr</p>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Tous les éléments du site creation2musique.fr sont et restent la propriété intellectuelle et exclusive
                de son propriétaire. Aucune reproduction, exploitation, rediffusion ou utilisation sur tout support,
                même partielle, des éléments du site n'est autorisée sans l'accord écrit préalable du propriétaire.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <UserCheck className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold">Protection des données personnelles</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
                et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données
                vous concernant.
              </p>
              <p>
                Les informations recueillies sur ce site sont traitées de manière confidentielle. Nous ne
                vendons ni ne partageons vos données avec des tiers.
              </p>
              <p>
                Pour exercer vos droits ou pour toute question relative à la protection de vos données,
                vous pouvez nous contacter via notre formulaire de contact.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
            <p className="text-gray-600">
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              les tribunaux français seront compétents.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;