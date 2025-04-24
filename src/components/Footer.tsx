import React from 'react';
import { Instagram, Facebook, Twitter, Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">CookPlanner</span>
            </div>
            <p className="text-gray-400 mb-4">
              Planifica tu alimentación semanal de manera saludable y equilibrada con 
              nuestras herramientas y recetas personalizadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Recetas', 'Planificador', 'Lista de Compras', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">info@cookplanner.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">+34 912 345 678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Calle Gran Vía 123, Madrid, España</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Descarga la App</h3>
            <p className="text-gray-400 mb-4">
              Lleva CookPlanner contigo a donde vayas. Descarga nuestra aplicación 
              para iOS y Android.
            </p>
            <div className="space-y-3">
              <a href="#" className="block bg-black py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors text-center">
                Disponible en App Store
              </a>
              <a href="#" className="block bg-black py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors text-center">
                Disponible en Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CookPlanner. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;