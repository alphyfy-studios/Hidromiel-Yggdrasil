export interface NorthStory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  paragraphs: string[];
  isSample?: boolean;
}

export const northStories: NorthStory[] = [
  {
    id: "la-primera-gota",
    title: "La primera gota de Yggdrasil",
    subtitle: "Una historia sobre el origen de la hidromiel",
    category: "Relato de prueba",
    publishedAt: "Historia inaugural",
    readingTime: "3 min de lectura",
    isSample: true,
    paragraphs: [
      "En una noche sin luna, cuando el invierno cubría los caminos del norte, una viajera llegó al pie de un árbol tan antiguo que sus ramas parecían sostener el cielo. Llevaba consigo un cuenco de madera, una pequeña porción de miel y una pregunta: ¿qué sabor tiene un hogar cuando se ha perdido?",
      "La viajera dejó la miel junto a las raíces. Al amanecer, encontró el cuenco lleno de agua clara. Una gota había caído desde las ramas y, al tocar la miel, despertó en ella un aroma a flores, bosque y fuego encendido. No era un hechizo ni una respuesta completa; era una invitación a sentarse, compartir y escuchar.",
      "Desde entonces, quienes cruzaban aquellos caminos guardaban un poco de miel para el viaje y un poco para ofrecer a los demás. Así nació la costumbre de brindar antes de partir y al volver. La viajera siguió su camino con el cuenco entre las manos, llevando consigo una certeza sencilla: algunas historias comienzan cuando alguien comparte lo que tiene.",
      "Esta crónica es una historia original de prueba para el sitio de Hidromiel Yggdrasil. El relato y sus personajes son ficticios.",
    ],
  },
];
