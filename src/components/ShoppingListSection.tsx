import React, { useState } from 'react';
import { ShoppingBag, Check, PlusCircle, X } from 'lucide-react';

// Sample shopping list data
const sampleItems = [
  { id: 1, name: "Aguacates", amount: "2 unidades", category: "Frutas y Verduras", checked: false },
  { id: 2, name: "Quinoa", amount: "500g", category: "Granos", checked: false },
  { id: 3, name: "Pechuga de pollo", amount: "400g", category: "Carnes", checked: true },
  { id: 4, name: "Brócoli", amount: "1 unidad", category: "Frutas y Verduras", checked: false },
  { id: 5, name: "Leche de almendras", amount: "1 litro", category: "Lácteos y Alternativas", checked: true },
  { id: 6, name: "Huevos", amount: "12 unidades", category: "Huevos y Lácteos", checked: false },
  { id: 7, name: "Aceite de oliva", amount: "1 botella", category: "Despensa", checked: false },
  { id: 8, name: "Limones", amount: "3 unidades", category: "Frutas y Verduras", checked: false },
];

const ShoppingListSection: React.FC = () => {
  const [items, setItems] = useState(sampleItems);
  const [newItem, setNewItem] = useState('');
  
  const handleCheck = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };
  
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([
        ...items, 
        { 
          id: items.length + 1, 
          name: newItem, 
          amount: "1 unidad", 
          category: "Otros", 
          checked: false 
        }
      ]);
      setNewItem('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };
  
  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <section id="lista de compras" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lista de Compras Inteligente</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CookPlanner genera automáticamente una lista de compras basada en tu plan semanal.
            Ahorra tiempo y evita compras innecesarias con nuestra lista de compras inteligente.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 p-4 text-white flex items-center">
            <ShoppingBag className="mr-2" size={24} />
            <h3 className="text-xl font-semibold">Lista de Compras Semanal</h3>
          </div>
          
          <div className="p-4 border-b border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Añadir un nuevo producto..."
                className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button 
                onClick={handleAddItem}
                className="bg-green-600 text-white p-2 rounded-r-md hover:bg-green-700 transition-colors"
              >
                <PlusCircle size={24} />
              </button>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {Object.entries(groupedItems).map(([category, categoryItems]) => (
              <div key={category} className="p-4">
                <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
                <ul className="space-y-2">
                  {categoryItems.map(item => (
                    <li 
                      key={item.id} 
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <div className="flex items-center flex-grow">
                        <button 
                          onClick={() => handleCheck(item.id)}
                          className={`w-5 h-5 mr-3 rounded-full flex items-center justify-center border ${
                            item.checked 
                              ? 'bg-green-600 border-green-600' 
                              : 'border-gray-300'
                          }`}
                        >
                          {item.checked && <Check size={12} className="text-white" />}
                        </button>
                        <span className={`flex-grow ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-500 ml-2 mr-4">{item.amount}</span>
                      </div>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-green-50 flex justify-between items-center">
            <div>
              <span className="font-medium">Total: </span>
              <span>{items.length} productos</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Exportar Lista
            </button>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Personaliza tu lista según tus preferencias de compra, añade productos manualmente
            o gestiona pantry items que ya tienes en casa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShoppingListSection;