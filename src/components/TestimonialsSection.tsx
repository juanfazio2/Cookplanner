import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../utils/data';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué dicen nuestros usuarios?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo CookPlanner ha ayudado a miles de personas a mejorar sus hábitos alimenticios
            y simplificar la planificación de comidas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  transition-opacity duration-500 
                  ${activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}
                `}
              >
                <div className="bg-green-50 rounded-lg p-8 relative">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-10 w-8 h-8 bg-green-50 transform rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;