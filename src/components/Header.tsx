import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-bold">CookPlanner</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Inicio', 'Recetas', 'Planificador', 'Lista de Compras', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-200 hover:text-green-600 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
            Comienza Ahora
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {['Inicio', 'Recetas', 'Planificador', 'Lista de Compras', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-800 hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200 w-full">
              Comienza Ahora
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;