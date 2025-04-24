import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 min-h-screen relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Planifica tu semana, equilibra tu vida
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            CookPlanner te ayuda a organizar tus comidas semanales con recetas saludables, 
            equilibradas y deliciosas, adaptadas a tus necesidades y preferencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center group">
              Comienza Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition-colors duration-200">
              Ver Demo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,197.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;