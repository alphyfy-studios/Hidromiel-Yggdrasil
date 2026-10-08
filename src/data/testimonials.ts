// src/data/testimonials.ts

export interface Testimonial {
  author: string;
  role: string;
  location: string;
  text: string;
  stars?: number;
}

export const testimonials: Testimonial[] = [
  {
    author: "Björn Martínez",
    role: "Maestro Cervecero",
    location: "Ciudad de México",
    stars: 5,
    text: "La Reserva de Odín cambió mi perspectiva sobre el hidromiel. Nunca imaginé que una bebida fermentada pudiera tener tanta complejidad y elegancia. Digna del Salón de Val‑Halla.",
  },
  {
    author: "Ingrid Sánchez",
    role: "Sommelier",
    location: "Guadalajara",
    stars: 5,
    text: "El Thor's Hammer es perfecto para mis maridajes. Seco, con ese toque floral y una acidez perfecta. Lo sirvo en mi restaurante desde hace dos años y mis comensales siempre piden más.",
  },
  {
    author: "Ragnar López",
    role: "Coleccionista",
    location: "Monterrey",
    stars: 5,
    text: "El Loki's Venom es una obra de arte. Picante, especiado, inesperado. Exactamente como el dios que lo inspira. Lo pedí para la boda vikinga de mis mejores amigos y fue el hit de la noche.",
  },
];
