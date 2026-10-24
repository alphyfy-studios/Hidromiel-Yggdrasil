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
    author: "BRANDON GATOER LEON",
    role: "",
    location: "",
    stars: 5,
    text: "el sabor de la hidromiel es unico, de las mejores que he probado",
  },
  {
    author: "LUIS MARTINEZ",
    role: "",
    location: "",
    stars: 5,
    text: "Recien la tome en el rincon de los brujos y es una de las mejores hidromieles que he tenido el gusto de probar. Pedi el carton y medio y me lo trajeron a las puertas de un dia para otro, que Odín les dé su bendicion hermanos, son geniales",
  },
];
