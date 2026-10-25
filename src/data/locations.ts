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
  mapsUrl: string;
  isDemo?: boolean;
}

export const salesLocations: SalesLocation[] = [
  {
    id: "vinos-y-cervezas-el-paso",
    name: "Vinos y Cervezas “El Paso”",
    category: "Tienda de cerveza · 4.9 ★",
    address: "Av Manuel J. Clouthier 290-int 7, Clouthier, Plaza Marqueza, 45038 Zapopan, Jal.",
    hours: "Consulta el horario actualizado en Google Maps.",
    phone: "No publicado en Google Maps",
    description:
      "Tienda especializada en vinos, licores y cervezas artesanales, ubicada en Plaza Marqueza.",
    coordinates: [20.6697605, -103.4186003],
    mapsUrl: "https://maps.app.goo.gl/m7Sq2Vbspk8cLnwH7?g_st=aw",
  },
  {
    id: "la-barra-del-paso",
    name: "La Barra del Paso",
    category: "Cervecería artesanal · 4.9 ★",
    address: "Av Manuel J. Clouthier 290 -3, Lomas de Guadalupe, Plaza Marqueza, 45038 Zapopan, Jal.",
    hours: "Consulta el horario actualizado en Google Maps.",
    phone: "33 3397 2023",
    description: "Bar de cerveza artesanal ubicado en Plaza Marqueza.",
    // Ubicación del local publicada en Untappd; está en la misma plaza que El Paso.
    coordinates: [20.6693859, -103.4186401],
    mapsUrl: "https://maps.app.goo.gl/UCw4teu8SqxvQ6T9A?g_st=aw",
  },
  {
    id: "board-game-la-madriguera",
    name: "Board Game La Madriguera",
    category: "Café de juegos de mesa · 4.2 ★",
    address: "Av. Tepeyac 947, Chapalita Sur, 45040 Zapopan, Jal.",
    hours: "Consulta el horario actualizado en Google Maps.",
    phone: "33 1520 7304",
    description:
      "Café de juegos de mesa con bebidas y snacks, en la zona de Chapalita Sur.",
    // Coordenadas del punto publicado en OpenStreetMap/Mapcarta.
    coordinates: [20.66264, -103.4034],
    mapsUrl: "https://maps.app.goo.gl/QMzmxshhQjtJxD1f8?g_st=aw",
  },
  {
    id: "xulada-cerveceria",
    name: "Xulada Cervecería",
    category: "Cervecería artesanal · 4.9 ★",
    address: "Av. Enrique Díaz de León Nte. 32, Col. Americana, Zona Centro, 44100 Guadalajara, Jal.",
    hours: "Consulta el horario actualizado en Google Maps.",
    phone: "No publicado en Google Maps",
    description: "Cervecería artesanal en la Colonia Americana, en el centro de Guadalajara.",
    coordinates: [20.676693, -103.3592949],
    mapsUrl: "https://maps.app.goo.gl/Y4KbTNTwRk3D3y3X8",
  },
  {
    id: "gulden-draak",
    name: "Gulden Draak",
    category: "Bar · 4.7 ★",
    address: "C. Pedro Moreno 1274, Col. Americana, 44600 Guadalajara, Jal.",
    hours: "Consulta el horario actualizado en Google Maps.",
    phone: "33 3826 4753",
    description: "Gastropub con una selección de cervezas belgas, importadas y artesanales.",
    coordinates: [20.6756799, -103.3636546],
    mapsUrl: "https://maps.app.goo.gl/YEAS7u9nfjxextVr6",
  },
  {
    id: "kraken-street-food",
    name: "Kraken Street Food",
    category: "Marisquería · 4.7 ★",
    address: "Calle Hospital 1531, Santa Teresita, 44200 Guadalajara, Jal.",
    hours: "Consulta el horario actualizado en Google Maps.",
    phone: "No publicado en Google Maps",
    description: "Marisquería de comida callejera en la colonia Santa Teresita.",
    coordinates: [20.6855859, -103.3674645],
    mapsUrl: "https://maps.app.goo.gl/BemiMqQ8YJAHjyPy6",
  },
];
