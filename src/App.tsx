import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeSection from './components/RecipeSection';
import PlannerSection from './components/PlannerSection';
import ShoppingListSection from './components/ShoppingListSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <RecipeSection />
        <PlannerSection />
        <ShoppingListSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;