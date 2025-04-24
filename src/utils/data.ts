export interface Recipe {
  title: string;
  description: string;
  image: string;
  time: number;
  calories: number;
  servings: number;
  categories: string[];
  ingredients: string[];
  nutrition: {
    [key: string]: string;
  };
  story: string;
}

export const recipes: Recipe[] = [
  {
    title: "Bowl de Quinoa con Vegetales",
    description: "Un nutritivo bowl lleno de proteínas y vegetales frescos para mantenerte energizado durante todo el día.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 25,
    calories: 420,
    servings: 2,
    categories: ["almuerzo", "vegetariano", "rápido"],
    ingredients: [
      "1 taza de quinoa",
      "2 tazas de agua o caldo vegetal",
      "1 aguacate maduro",
      "1 zanahoria mediana",
      "1/2 pepino",
      "1 taza de garbanzos cocidos",
      "1/4 taza de semillas de calabaza",
      "2 cucharadas de aceite de oliva",
      "Jugo de 1 limón",
      "Sal y pimienta al gusto"
    ],
    nutrition: {
      "Calorías": "420 kcal",
      "Proteínas": "15g",
      "Carbohidratos": "45g",
      "Grasas": "22g",
      "Fibra": "12g",
      "Sodio": "320mg"
    },
    story: "Este bowl de quinoa fue inspirado por las tradiciones culinarias de los Andes, donde la quinoa ha sido un alimento básico durante miles de años. La combinación con vegetales frescos y garbanzos aporta un equilibrio perfecto entre sabor y nutrición."
  },
  {
    title: "Avena Nocturna con Frutas",
    description: "Prepara esta avena la noche anterior y disfruta de un desayuno nutritivo y delicioso sin esfuerzo.",
    image: "https://images.pexels.com/photos/4397920/pexels-photo-4397920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 10,
    calories: 320,
    servings: 1,
    categories: ["desayuno", "vegetariano", "rápido"],
    ingredients: [
      "1/2 taza de avena",
      "1/2 taza de leche de almendras",
      "1/4 taza de yogur griego",
      "1 cucharada de semillas de chía",
      "1 cucharada de miel o sirope de arce",
      "1/2 manzana picada",
      "1/4 taza de arándanos",
      "Canela al gusto"
    ],
    nutrition: {
      "Calorías": "320 kcal",
      "Proteínas": "12g",
      "Carbohidratos": "48g",
      "Grasas": "10g",
      "Fibra": "8g",
      "Sodio": "120mg"
    },
    story: "La avena nocturna se popularizó con el movimiento de alimentación consciente, pero tiene raíces en las tradiciones escandinavas de muesli remojado. Es una forma ancestral de preparar granos que mejora su digestibilidad."
  },
  {
    title: "Salmón al Horno con Espárragos",
    description: "Una cena elegante y nutritiva, rica en ácidos grasos omega-3 y proteínas de alta calidad.",
    image: "https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 30,
    calories: 380,
    servings: 2,
    categories: ["cena", "rápido"],
    ingredients: [
      "2 filetes de salmón (150g cada uno)",
      "1 manojo de espárragos",
      "2 cucharadas de aceite de oliva",
      "1 limón",
      "2 dientes de ajo picados",
      "1 cucharadita de eneldo fresco picado",
      "Sal marina y pimienta negra recién molida"
    ],
    nutrition: {
      "Calorías": "380 kcal",
      "Proteínas": "34g",
      "Carbohidratos": "8g",
      "Grasas": "24g",
      "Fibra": "3g",
      "Sodio": "320mg"
    },
    story: "Este plato se inspira en la cocina escandinava, donde el salmón es un alimento básico. La combinación de salmón fresco con hierbas aromáticas y el toque ácido del limón crea un equilibrio perfecto de sabores."
  },
  {
    title: "Ensalada Mediterránea",
    description: "Una colorida ensalada inspirada en los sabores frescos de la costa mediterránea.",
    image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 15,
    calories: 280,
    servings: 2,
    categories: ["almuerzo", "vegetariano", "rápido"],
    ingredients: [
      "2 tazas de lechuga romana",
      "1/2 taza de tomates cherry",
      "1/2 pepino",
      "1/4 taza de aceitunas kalamata",
      "1/4 cebolla roja",
      "100g de queso feta",
      "2 cucharadas de aceite de oliva extra virgen",
      "1 cucharada de vinagre balsámico",
      "1 cucharadita de orégano seco",
      "Sal y pimienta al gusto"
    ],
    nutrition: {
      "Calorías": "280 kcal",
      "Proteínas": "7g",
      "Carbohidratos": "12g",
      "Grasas": "22g",
      "Fibra": "4g",
      "Sodio": "540mg"
    },
    story: "La ensalada mediterránea es un homenaje a la dieta mediterránea, reconocida por sus beneficios para la salud. Cada ingrediente aporta no solo sabor, sino también una parte de la rica historia culinaria de países como Grecia, Italia y España."
  },
  {
    title: "Batido Verde Energizante",
    description: "Un batido repleto de nutrientes para comenzar el día con energía o como merienda saludable.",
    image: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 5,
    calories: 210,
    servings: 1,
    categories: ["desayuno", "vegetariano", "rápido"],
    ingredients: [
      "1 plátano maduro",
      "1 puñado de espinacas frescas",
      "1/2 aguacate",
      "1 cucharada de mantequilla de almendras",
      "1 taza de leche de almendras sin azúcar",
      "1 cucharadita de semillas de chía",
      "Hielo al gusto"
    ],
    nutrition: {
      "Calorías": "210 kcal",
      "Proteínas": "5g",
      "Carbohidratos": "24g",
      "Grasas": "12g",
      "Fibra": "7g",
      "Sodio": "160mg"
    },
    story: "Los batidos verdes ganaron popularidad con el movimiento de alimentación cruda, pero tienen raíces en prácticas ancestrales de consumir hojas verdes para obtener vitalidad. Este batido combina lo mejor de la tradición con la ciencia nutricional moderna."
  },
  {
    title: "Pollo al Limón con Hierbas",
    description: "Una receta ligera y llena de sabor, perfecta para una cena familiar saludable.",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 35,
    calories: 350,
    servings: 4,
    categories: ["cena"],
    ingredients: [
      "4 pechugas de pollo",
      "2 limones",
      "3 dientes de ajo",
      "2 cucharadas de aceite de oliva",
      "1 cucharada de romero fresco picado",
      "1 cucharada de tomillo fresco picado",
      "1 taza de caldo de pollo bajo en sodio",
      "Sal y pimienta al gusto"
    ],
    nutrition: {
      "Calorías": "350 kcal",
      "Proteínas": "42g",
      "Carbohidratos": "5g",
      "Grasas": "18g",
      "Fibra": "1g",
      "Sodio": "240mg"
    },
    story: "Esta receta tiene sus raíces en la cocina mediterránea, donde el limón y las hierbas aromáticas son ingredientes básicos. La combinación de estos simples ingredientes crea un plato que ha sido disfrutado por generaciones."
  },
  {
    title: "Tostada de Aguacate con Huevo",
    description: "Un clásico desayuno o brunch nutritivo, rico en grasas saludables y proteínas.",
    image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 10,
    calories: 320,
    servings: 1,
    categories: ["desayuno", "vegetariano", "rápido"],
    ingredients: [
      "1 rebanada de pan integral",
      "1/2 aguacate maduro",
      "1 huevo",
      "Jugo de limón",
      "Hojuelas de chile rojo (opcional)",
      "Cilantro fresco picado",
      "Sal y pimienta al gusto"
    ],
    nutrition: {
      "Calorías": "320 kcal",
      "Proteínas": "12g",
      "Carbohidratos": "18g",
      "Grasas": "22g",
      "Fibra": "6g",
      "Sodio": "290mg"
    },
    story: "La tostada de aguacate se popularizó en cafeterías de Australia y rápidamente se convirtió en un fenómeno global. Combina la tradición latinoamericana del uso del aguacate con el desayuno tradicional europeo para crear un plato nutritivo y satisfactorio."
  },
  {
    title: "Curry de Garbanzos y Espinacas",
    description: "Un reconfortante curry vegetariano, rico en proteínas y lleno de sabores aromáticos.",
    image: "https://images.pexels.com/photos/3662139/pexels-photo-3662139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    time: 30,
    calories: 380,
    servings: 4,
    categories: ["cena", "vegetariano"],
    ingredients: [
      "2 latas de garbanzos",
      "300g de espinacas frescas",
      "1 cebolla mediana",
      "3 dientes de ajo",
      "1 lata de tomates troceados",
      "2 cucharadas de pasta de curry",
      "1 cucharadita de comino molido",
      "1 cucharadita de cúrcuma",
      "400ml de leche de coco",
      "Cilantro fresco para decorar",
      "Sal al gusto"
    ],
    nutrition: {
      "Calorías": "380 kcal",
      "Proteínas": "14g",
      "Carbohidratos": "42g",
      "Grasas": "18g",
      "Fibra": "12g",
      "Sodio": "320mg"
    },
    story: "Este curry se inspira en la rica tradición culinaria del sur de la India, donde los garbanzos y las espinacas son ingredientes básicos. La combinación de especias no solo aporta sabor, sino también beneficios para la salud según la medicina ayurvédica."
  }
];

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "María López",
    location: "Madrid, España",
    quote: "CookPlanner ha cambiado completamente mi forma de organizar las comidas. Ahora ahorro tiempo, dinero y disfruto de una alimentación más equilibrada. ¡No puedo imaginar mi vida sin esta aplicación!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Carlos Rodríguez",
    location: "Barcelona, España",
    quote: "Como padre soltero con dos hijos, organizar las comidas era un verdadero desafío. CookPlanner me ha ayudado a planificar comidas saludables y variadas que a mis hijos les encantan. La lista de compras automática es una maravilla.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    name: "Laura Fernández",
    location: "Valencia, España",
    quote: "Desde que uso CookPlanner he descubierto nuevas recetas y he mejorado mis habilidades en la cocina. La información nutricional me ayuda a mantener una dieta equilibrada sin sacrificar el sabor.",
    rating: 4,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];