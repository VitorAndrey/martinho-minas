import { Product } from "@models/index";

export function calcTotalPrice(product: Product) {
  const { basePrice, discountPercentage } = product;

  return basePrice - (basePrice * discountPercentage) / 100;
}
