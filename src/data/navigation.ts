// src/data/navigation.ts

export interface NavLink {
  label: string;
  href: string;
  rune?: string;
  cta?: boolean; // renders as a primary button
}

export const navLinks: NavLink[] = [
  { label: "Nuestra Saga", href: "#about", rune: "ᛗ" },
  { label: "Hidromiel", href: "#gallery", rune: "ᛃ" },
  { label: "Puntos de venta", href: "/mapa", rune: "ᚷ" },
  { label: "Festivales", href: "/festivales", rune: "ᚠ" },
  { label: "Historias del Norte", href: "/historiasdelnorte", rune: "ᛟ" },
  { label: "Contacto", href: "#footer", rune: "ᚨ" },
  { label: "Tienda online", href: "/peticiones-especiales", cta: true },
];

// El footer replica exactamente las secciones del menú responsive.
export const footerNavLinks = navLinks;
