// src/data/navigation.ts

export interface NavLink {
  label: string;
  href: string;
  cta?: boolean; // renders as a primary button
}

export const navLinks: NavLink[] = [
  { label: "Nuestra Saga",  href: "#about"   },
  { label: "Hidromiel",     href: "#gallery"  },
  // { label: "Proceso",       href: "#process"  },
  // { label: "Crónicas",      href: "#saga"     },
  { label: "Contacto",      href: "#footer"   },
  { label: "Comprar Ahora",   href: "#footer",  cta: true },
];

export const footerNavLinks: NavLink[] = [
  { label: "Nuestra Saga",     href: "#about"   },
  { label: "Hidromiel",     href: "#gallery" },
  // { label: "El Proceso",       href: "#process" },
  { label: "Puntos de Venta",  href: "#"        },
  // { label: "Mayoreo",          href: "#"        },
  { label: "Contacto", href: "#"        },
   { label: "Festivales",         href: "#saga"    },
      { label: "Peticiones especiales",         href: "#saga"    },
     { label: "Historias del Norte",         href: "#saga"    },
];
