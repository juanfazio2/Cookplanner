import React, { useEffect } from 'react';
import { X, Clock, Flame, Users, Award } from 'lucide-react';
import { Recipe } from '../utils/data';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.categories.map((category, index) => (
              <span 
                key={index}
                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{recipe.title}</h2>
          
          <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{recipe.time} min</span>
            </div>
            <div className="flex items-center">
              <Flame size={18} className="mr-2" />
              <span>{recipe.calories} calorías</span>
            </div>
            <div className="flex items-center">
              <Users size={18} className="mr-2" />
              <span>{recipe.servings} porciones</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">{recipe.description}</p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ingredientes</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Información Nutricional</h3>
              <div className="space-y-3">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <Award className="text-amber-500 mr-3 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-medium">Historia de la Receta</h4>
                <p className="text-gray-600 text-sm mt-1">{recipe.story}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-200">
              Añadir al Planificador
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;