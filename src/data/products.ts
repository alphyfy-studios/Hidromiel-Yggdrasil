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
    id: 'odin-reserve',
    name: "Reserva de Odín",
    subtitle: "Edición Limitada",
    tag: "Edición Especial",
    rune: "ᚢ",
    description:
      "El hidromiel más complejo de nuestra colección. Envejecido en barrica de roble con especias del Norte, notas de vainilla y miel de brezo silvestre.",
    image:"/public/images/products/Productos.jpg",
      featured: true,
  },
  {
    id: 'thors-hammer',
    name: "Thor's Hammer",
    subtitle: "Traditional Mead",
    tag: "Clásico",
    rune: "ᚦ",
    description: "Hidromiel clásico, seco y refrescante. El favorito de los guerreros.",
     image:"/public/images/products/Producto-Berserker.jpg",
  },
  {
    id: 'lokis-venom',
    name: "Loki's Venom",
    subtitle: "Spiced Mead",
    tag: "Seasonal",
    rune: "ᛚ",
    description: "Hidromiel especiado con canela, jengibre y pimienta negra. Traicionero y delicioso.",
     image:"/public/images/products/Producto-Midgard.jpg",
  },
  {
    id: 'freyas-garden',
    name: "Freya's Garden",
    subtitle: "Melomel",
    tag: "Frutal",
    rune: "ᚠ",
    description: "Melomel de moras y frambuesas silvestres. Dulce como la diosa del amor.",
     image:"/public/images/products/Producto-VanirBlut.jpg",
  },
  {
    id: 'norns-brew',
    name: "Norns' Brew",
    subtitle: "Metheglin",
    tag: "Herbal",
    rune: "ᚾ",
    description: "Metheglin de hierbas ancestrales: romero, lavanda y tomillo del monte.",
     image:"/public/images/products/Producto-Berserker.jpg",
  },
];
