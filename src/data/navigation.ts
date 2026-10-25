// src/data/navigation.ts

export interface NavLink {
  label: string;
  href: string;
  cta?: boolean; // renders as a primary button
}

export const navLinks: NavLink[] = [
  { label: "Nuestra Saga", href: "#about" },
  { label: "Hidromiel", href: "#gallery" },
  { label: "Puntos de venta", href: "/mapa" },
  { label: "Festivales", href: "/festivales" },
  { label: "Historias del Norte", href: "/historiasdelnorte" },
  { label: "Contacto", href: "#footer" },
  { label: "Tienda online", href: "/peticiones-especiales", cta: true },
];

// El footer replica exactamente las secciones del menú responsive.
export const footerNavLinks = navLinks;
