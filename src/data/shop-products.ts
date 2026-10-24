export interface ShopProduct {
  id: string;
  name: string;
  color: "Roja" | "Amarilla";
  packSize: 6 | 12 | 24;
  description: string;
  image: string;
  /** Precio de la presentación en MXN. Cada lata cuesta $85. */
  price: number;
}

const productImages = {
  Roja: "/images/products/yggdrasil_red_1.png",
  Amarilla: "/images/products/yggdrasil_yellow_1.png",
};

export const shopProducts: ShopProduct[] = [
  { id: "roja-6", name: "Hidromiel VANIR BLUT", color: "Roja", packSize: 6, description: "Caja con 6 latas de VANIR BLUT · $85 por lata", image: productImages.Roja, price: 510 },
  { id: "amarilla-6", name: "Hidromiel MIDGAD", color: "Amarilla", packSize: 6, description: "Caja con 6 latas de MIDGAD · $85 por lata", image: productImages.Amarilla, price: 510 },
  { id: "roja-12", name: "Hidromiel VANIR BLUT", color: "Roja", packSize: 12, description: "Caja con 12 latas de VANIR BLUT · $85 por lata", image: productImages.Roja, price: 1020 },
  { id: "amarilla-12", name: "Hidromiel MIDGAD", color: "Amarilla", packSize: 12, description: "Caja con 12 latas de MIDGAD · $85 por lata", image: productImages.Amarilla, price: 1020 },
  { id: "roja-24", name: "Hidromiel VANIR BLUT", color: "Roja", packSize: 24, description: "Caja con 24 latas de VANIR BLUT · $85 por lata", image: productImages.Roja, price: 2040 },
  { id: "amarilla-24", name: "Hidromiel MIDGAD", color: "Amarilla", packSize: 24, description: "Caja con 24 latas de MIDGAD · $85 por lata", image: productImages.Amarilla, price: 2040 },
];
