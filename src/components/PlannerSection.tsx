import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { recipes } from '../utils/data';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const mealsOfDay = ['Desayuno', 'Almuerzo', 'Cena'];

interface MealPlan {
  [day: string]: {
    [meal: string]: number | null;
  };
}

const PlannerSection: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState('Esta Semana');
  const [mealPlan, setMealPlan] = useState<MealPlan>(() => {
    const initialPlan: MealPlan = {};
    daysOfWeek.forEach(day => {
      initialPlan[day] = {
        'Desayuno': Math.floor(Math.random() * 3),
        'Almuerzo': Math.floor(Math.random() * 3) + 3,
        'Cena': Math.floor(Math.random() * 2) + 6,
      };
    });
    return initialPlan;
  });

  const addMeal = (day: string, meal: string) => {
    // In a real app, this would open a recipe picker modal
    const randomRecipeIndex = Math.floor(Math.random() * recipes.length);
    setMealPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: randomRecipeIndex
      }
    }));
  };

  return (
    <section id="planificador" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planifica tu Semana</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organiza tus comidas de la semana de manera sencilla con nuestro planificador. 
            Selecciona recetas para cada día y deja que CookPlanner te ayude a mantener 
            una alimentación equilibrada.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-8">
          <div className="bg-green-50 py-4 px-6 border-b border-gray-100 flex justify-between items-center">
            <button className="text-gray-600 hover:text-green-600">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center text-lg font-medium">
              <Calendar size={20} className="mr-2 text-green-600" />
              {currentWeek}
            </div>
            <button className="text-gray-600 hover:text-green-600">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-4 text-left text-gray-500 font-medium w-24"></th>
                  {daysOfWeek.map(day => (
                    <th key={day} className="p-4 text-center text-gray-700 font-medium">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mealsOfDay.map(meal => (
                  <tr key={meal} className="border-b border-gray-100">
                    <td className="p-4 text-left text-gray-700 font-medium">{meal}</td>
                    {daysOfWeek.map(day => (
                      <td key={`${day}-${meal}`} className="p-2 text-center">
                        {mealPlan[day][meal] !== null ? (
                          <div 
                            className="bg-green-50 p-2 rounded-md border border-green-100 text-sm hover:bg-green-100 transition-colors cursor-pointer"
                            onClick={() => addMeal(day, meal)}
                          >
                            {recipes[mealPlan[day][meal] as number].title}
                          </div>
                        ) : (
                          <button 
                            className="w-full py-2 px-4 border border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                            onClick={() => addMeal(day, meal)}
                          >
                            <Plus size={16} className="mr-1" />
                            <span>Añadir</span>
                          </button>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Con nuestro planificador, puedes arrastrar y soltar recetas fácilmente, 
            ver el balance nutricional semanal y ajustar según tus preferencias.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Explorar Planificador
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlannerSection;