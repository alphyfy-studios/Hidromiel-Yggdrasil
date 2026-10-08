export interface ShopProduct {
  id: string;
  name: string;
  color: "Roja" | "Amarilla";
  packSize: 6 | 12 | 24;
  description: string;
  image: string;
  /** Define aquí el precio de venta en MXN cuando esté confirmado. */
  price: number | null;
}

const productImages = {
  Roja: "/images/products/yggdrasil_red_1.png",
  Amarilla: "/images/products/yggdrasil_yellow_1.png",
};

export const shopProducts: ShopProduct[] = [
  { id: "roja-6", name: "Hidromiel roja", color: "Roja", packSize: 6, description: "Caja con 6 piezas", image: productImages.Roja, price: null },
  { id: "amarilla-6", name: "Hidromiel amarilla", color: "Amarilla", packSize: 6, description: "Caja con 6 piezas", image: productImages.Amarilla, price: null },
  { id: "roja-12", name: "Hidromiel roja", color: "Roja", packSize: 12, description: "Caja con 12 piezas", image: productImages.Roja, price: null },
  { id: "amarilla-12", name: "Hidromiel amarilla", color: "Amarilla", packSize: 12, description: "Caja con 12 piezas", image: productImages.Amarilla, price: null },
  { id: "roja-24", name: "Hidromiel roja", color: "Roja", packSize: 24, description: "Caja con 24 piezas", image: productImages.Roja, price: null },
  { id: "amarilla-24", name: "Hidromiel amarilla", color: "Amarilla", packSize: 24, description: "Caja con 24 piezas", image: productImages.Amarilla, price: null },
];
