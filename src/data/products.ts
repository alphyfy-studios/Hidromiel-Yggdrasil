// src/data/products.ts
// Centraliza los datos de productos para fácil mantenimiento.
// Reemplaza `image` con la ruta real en /public/images/products/

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  rune: string;
  description: string;
  image?: string;   // e.g. '/images/products/odin-reserve.jpg'
  featured?: boolean;
}

export const products: Product[] = [
  {
  //   id: 'odin-reserve',
  //   name: "Reserva de Odín",
  //   subtitle: "Edición Limitada",
  //   tag: "Edición Especial",
  //   rune: "ᚢ",
  //   description:
  //     "El hidromiel más complejo de nuestra colección. Envejecido en barrica de roble con especias del Norte, notas de vainilla y miel de brezo silvestre.",
  //   image:"/public/images/products/Productos.jpg",
  //     featured: true,
  // },
  // {
  //   id: 'thors-hammer',
  //   name: "Thor's Hammer",
  //   subtitle: "Traditional Mead",
  //   tag: "Clásico",
  //   rune: "ᚦ",
  //   description: "Hidromiel clásico, seco y refrescante. El favorito de los guerreros.",
  //    image:"/public/images/products/Producto-Berserker.jpg",
  // },
  // {
    id: 'Midgard',
    name: "Midgard",
    subtitle: "Hidromiel dulce",
    tag: "Frutal",
    rune: "ᛚ",
    description: "Infusionada con frutas y especias. Siéntete como en casa.",
     image:"/public/images/products/Producto-Midgard.jpg",
  },

  {
    id: 'Berserker',
    name: "Berserker",
    subtitle: "Hidromiel Semi dulce",
    tag: "MUY PRONTO...",
    rune: "ᚾ",
    description: "Infusionada con hierbas estimulantes. Sentirás el vigor de un guerrero Berserker.",
     image:"/public/images/products/Producto-Berserker.jpg",
  },
   {
    id: 'Vanir Blut',
    name: "Vanir Blut",
    subtitle: "Hidromiel Seca",
    tag: "Especiada",
    rune: "ᚠ",
    description: "Infusionada con flores y especias. Honra el sacrificio de Kvasir, saborea la sabiduría.",
     image:"/public/images/products/Producto-VanirBlut.jpg",
  },
];
