import React from 'react';
import { Clock, Flame, Users } from 'lucide-react';
import { Recipe } from '../utils/data';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          {recipe.categories.includes('vegetariano') && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Vegetariano
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{recipe.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{recipe.time} min</span>
          </div>
          <div className="flex items-center">
            <Flame size={16} className="mr-1" />
            <span>{recipe.calories} cal</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{recipe.servings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;