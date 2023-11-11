import { Product } from "@models/index";

export function calcTotalPrice(product: Product) {
  const { base_price, discount_percentage } = product;
  const totalPrice = base_price - (base_price * discount_percentage) / 100;

  return totalPrice.toFixed(2).replace(".", ",");
}

export function formatCurrentcy(price: number | string) {
  const formatedPrice = Number(price).toFixed(2).replace(".", ",");

  return formatedPrice;
}
