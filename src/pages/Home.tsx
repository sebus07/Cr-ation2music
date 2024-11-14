import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Heart, PartyPopper, Gift, Star, Users, Clock, Headphones } from 'lucide-react';

const Home = () => {
  const categories = [
    {
      title: "Musique d'Anniversaire",
      icon: <Gift className="h-8 w-8" />,
      description: "Créez un moment magique pour célébrer cette journée spéciale.",
      image: "/images/ballon.webp",
    },
    {
      title: "Musique Romantique",
      icon: <Heart className="h-8 w-8" />,
      description: "Exprimez vos sentiments à travers une mélodie unique.",
      image: "/images/romance.webp",
    },
    {
      title: "Musique pour les Fêtes",
      icon: <PartyPopper className="h-8 w-8" />,
      description: "Animez vos célébrations avec une chanson sur mesure.",
      image: "/images/fetes.webp",
    },
  ];

  const testimonials = [
    {
      name: "Marie L.",
      role: "Pour un anniversaire",
      content: "La chanson créée pour l'anniversaire de ma mère était parfaite. Elle en a pleuré de joie !",
      image: "/images/tete2.webp",
    },
    {
      name: "Thomas R.",
      role: "Pour une demande en mariage",
      content: "Grâce à cette musique personnalisée, ma demande en mariage a été encore plus magique.",
      image: "/images/tete1.webp",
    },
    {
      name: "Sophie M.",
      role: "Pour une fête d'entreprise",
      content: "Un vrai succès ! Tous nos collaborateurs ont adoré cette création unique.",
      image: "/images/tete3.webp",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/musique.webp"
            alt="Music Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Votre Histoire Mérite sa Propre Mélodie
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Créez des moments inoubliables avec des musiques personnalisées uniques,
              composées spécialement pour vos occasions spéciales.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
            >
              <Music className="mr-2 h-5 w-5" />
              Découvrir nos Créations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nos Catégories de Musiques
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choisissez parmi nos différentes options de personnalisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Notre Processus de Création</h2>
            <p className="mt-4 text-xl text-gray-600">Une approche simple et efficace pour votre musique personnalisée</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Music className="h-8 w-8" />,
                title: "1. Choix du Style",
                description: "Sélectionnez le type de musique qui vous correspond"
              },
              {
                icon: <Headphones className="h-8 w-8" />,
                title: "2. Personnalisation",
                description: "Partagez vos préférences et votre histoire"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "3. Composition",
                description: "Nos musiciens créent votre mélodie unique"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "4. Livraison",
                description: "Recevez votre création en 4 jours"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Témoignages Clients</h2>
            <p className="mt-4 text-xl text-gray-600">Découvrez ce que nos clients disent de leurs expériences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                L'Art de la Musique Personnalisée
              </h2>
              <div className="prose prose-purple">
                <p className="text-gray-600 mb-4">
                La musique a ce pouvoir unique de capturer les émotions et les moments précieux de notre vie. Chez Création2Musique, nous utilisons les technologies les plus avancées pour transformer vos histoires en mélodies uniques qui résonnent avec vos souvenirs les plus chers.
                </p>
                <p className="text-gray-600 mb-4">
                Chaque composition est créée avec précision grâce à notre technologie d'intelligence artificielle de pointe, garantissant une qualité sonore exceptionnelle et une personnalisation parfaite pour chaque occasion.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">+100 clients satisfaits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Note moyenne de 4.9/5</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/images/micro.webp"
                alt="Studio d'enregistrement"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/images/mixage.webp"
                alt="Musicien au travail"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à Créer Votre Musique Personnalisée ?
          </h2>
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-purple-700 transition-colors duration-300"
          >
            Découvrir Comment ça Marche
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;