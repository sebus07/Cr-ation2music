import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, FileText, Mail, Download, Music2, Mic, Headphones, Clock, Check, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "1. Choisissez votre type de musique",
      description: "Sélectionnez parmi nos trois catégories : anniversaire, romantique ou fête",
      image: "/images/icila.webp"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "2. Personnalisez votre chanson",
      description: "Remplissez le formulaire détaillé après l'achat pour personnaliser votre musique",
      image: "/images/personnalisez.webp"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "3. Recevez votre proposition",
      description: "Nous vous envoyons une première version sous 4 jours par email",
      image: "/images/proposition.webp"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "4. Téléchargez votre musique",
      description: "Validez la version finale ou demandez une modification, puis téléchargez votre création",
      image: "/images/telechargez.webp"
    }
  ];

  const features = [
    {
      icon: <Music2 className="h-6 w-6" />,
      title: "IA de Pointe",
      description: "Utilisation de technologies d'IA avancées pour une création musicale innovante"
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Technologie Moderne",
      description: "Création assistée par les dernières avancées en intelligence artificielle"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Personnalisation Précise",
      description: "Ajustement fin des paramètres pour un résultat unique"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre processus simple en 4 étapes pour créer
            votre musique personnalisée
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-purple-600 rounded-full p-3 text-white">
                    {step.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Technologie Innovante
            </h2>
            <p className="text-xl text-gray-600">
            Une approche moderne de la création musicale personnalisée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Studio Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
              L'Innovation au Service de la Musique
              </h2>
              <div className="prose prose-purple">
                <p className="text-gray-600 mb-6">
                Notre plateforme utilise les dernières avancées en intelligence artificielle pour créer des compositions musicales uniques. Cette technologie nous permet d'offrir une personnalisation poussée tout en maintenant une qualité sonore exceptionnelle.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Création assistée par IA de dernière génération
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Personnalisation avancée des paramètres
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Qualité sonore professionnelle
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/ia_control.webp"
                alt="Studio d'enregistrement"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-purple-100 rounded-2xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Note Moyenne</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4 jours</div>
              <div className="text-gray-600">Délai de Livraison</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Créer Votre Musique ?
          </h2>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            <Music2 className="mr-2 h-5 w-5" />
            Découvrir Nos Offres
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;