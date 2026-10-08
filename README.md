# Yggdrasil Meadery — Astro Project

Landing page para hidromiel artesanal vikingo, construida con Astro 4.
Cero JavaScript de cliente por defecto. Toda la interactividad (menú hamburger) es CSS puro.

## 🚀 Inicio rápido

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Genera dist/
npm run preview   # Preview del build
```

## 📁 Estructura del proyecto

```
yggdrasil-meadery/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── products/          ← Añade aquí las fotos de productos
│           ├── odin-reserve.jpg
│           ├── thors-hammer.jpg
│           └── ...
│
└── src/
    ├── layouts/
    │   └── Layout.astro       ← Shell HTML, <head>, fuentes, CSS global
    │
    ├── pages/
    │   └── index.astro        ← Página principal (orquestador)
    │
    ├── components/
    │   ├── sections/          ← Una sección = un componente
    │   │   ├── Header.astro
    │   │   ├── Hero.astro
    │   │   ├── About.astro
    │   │   ├── Gallery.astro
    │   │   ├── Process.astro
    │   │   ├── Testimonials.astro
    │   │   └── Footer.astro
    │   │
    │   └── ui/                ← Componentes atómicos reutilizables
    │       ├── RuneDivider.astro
    │       ├── SectionHeader.astro
    │       └── ProductCard.astro
    │
    ├── data/                  ← Fuente única de verdad para el contenido
    │   ├── products.ts
    │   ├── testimonials.ts
    │   └── navigation.ts
    │
    └── styles/
        └── global.css         ← Tokens CSS, reset, utilidades, animaciones
```

## 🖼️ Añadir imágenes de productos

1. Coloca tus imágenes en `public/images/products/`
2. En `src/data/products.ts`, agrega la propiedad `image` a cada producto:

```ts
{
  id: 'odin-reserve',
  image: '/images/products/odin-reserve.jpg',
  // ...resto de propiedades
}
```

`ProductCard.astro` detecta automáticamente si hay imagen y elimina el placeholder.

## ✏️ Editar contenido

| ¿Qué quieres cambiar?       | Archivo                          |
|-----------------------------|----------------------------------|
| Productos / galería         | `src/data/products.ts`           |
| Testimonios                 | `src/data/testimonials.ts`       |
| Links de navegación         | `src/data/navigation.ts`         |
| Pasos del proceso           | `src/components/sections/Process.astro` |
| Pilares de About            | `src/components/sections/About.astro`   |
| Colores / tipografía        | `src/styles/global.css` (`:root`)       |
| SEO / meta tags             | `src/pages/index.astro` (props de Layout) |

## 🎨 Paleta de colores

| Token          | Hex       | Uso                        |
|----------------|-----------|----------------------------|
| `--black`      | `#000000` | Fondo base                 |
| `--dark1`      | `#220901` | Fondos de sección          |
| `--dark2`      | `#621708` | Gradientes medios          |
| `--red1`       | `#941b0c` | Acentos decorativos        |
| `--red2`       | `#bc3908` | Roles, viñetas             |
| `--gold`       | `#f6aa1c` | Color primario de marca    |
| `--white`      | `#ffffff` | Texto principal            |

## 🛒 Peticiones especiales y pagos

- El catálogo y sus precios editables están en `src/data/shop-products.ts`.
- Mientras `price` sea `null`, la tienda muestra **Precio por definir** y no permite iniciar un cobro.
- El carrito se guarda en el navegador. El checkout presenta PayPal, Google Pay y tarjeta, pero no solicita ni almacena datos de tarjeta.
- Para activar pagos reales, configura `PUBLIC_CHECKOUT_ENDPOINT` (consulta `.env.example`) con la URL de un backend seguro. El navegador envía `POST` con `{ method, items: [{ id, quantity }] }`; el backend debe verificar los precios, crear una sesión con el proveedor y devolver `{ checkoutUrl }`.
- Guarda las claves privadas de PayPal o del procesador de pagos solo en el servidor, nunca en variables `PUBLIC_`.
