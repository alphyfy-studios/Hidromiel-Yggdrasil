/**
 * Puntos de venta mostrados en /mapa.
 * Agrega ubicaciones a este arreglo. Las coordenadas son [latitud, longitud]
 * y son la posición fija del pin, aunque la persona explore el mapa.
 */
export interface SalesLocation {
  id: string;
  name: string;
  category: string;
  address: string;
  hours: string;
  phone: string;
  description: string;
  coordinates: [number, number];
  isDemo?: boolean;
}

export const salesLocations: SalesLocation[] = [
  {
    id: "guadalajara-centro-demo",
    name: "Punto de venta de prueba",
    category: "Ubicación de demostración · por confirmar",
    address: "Zona Centro, Guadalajara, Jalisco, México",
    hours: "Por confirmar",
    phone: "Por confirmar",
    description:
      "Marcador de ejemplo para mostrar cómo aparecerá un punto de venta. Reemplaza esta ficha con los datos confirmados del establecimiento.",
    coordinates: [20.6769, -103.3475],
    isDemo: true,
  },
];
