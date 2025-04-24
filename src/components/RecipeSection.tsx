import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';
import { recipes } from '../utils/data';
import { Filter } from 'lucide-react';

const RecipeSection: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'desayuno', 'almuerzo', 'cena', 'vegetariano', 'rápido'];

  const filteredRecipes = activeFilter === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.categories.includes(activeFilter));

  return (
    <section id="recetas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubre Nuestras Recetas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de recetas saludables y deliciosas. Filtra por categoría, 
            ingredientes o necesidades dietéticas para encontrar la receta perfecta para ti.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="flex items-center text-gray-600 mr-2">
            <Filter size={18} className="mr-1" /> Filtrar:
          </span>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                ${activeFilter === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={index} 
              recipe={recipe} 
              onClick={() => setSelectedRecipe(index)} 
            />
          ))}
        </div>
      </div>
      
      {selectedRecipe !== null && (
        <RecipeModal 
          recipe={recipes[selectedRecipe]} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </section>
  );
};

export default RecipeSection;