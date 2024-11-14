import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music2 className="h-8 w-8 text-purple-400" />
              <span className="font-bold text-xl">Création2Music.fr</span>
            </div>
            <p className="text-gray-400 mt-2">
              Créez des moments inoubliables avec des musiques uniques et personnalisées.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@sebastien-koenig.fr"
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@sebastien-koenig.fr</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li>
              <Link to="/legal" className="text-gray-400 hover:text-purple-400 transition-colors">
  Mentions Légales
</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alchimie Webdesign. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;