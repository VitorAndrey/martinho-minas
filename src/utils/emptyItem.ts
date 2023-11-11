import { Product } from "@models/index";

export function generateEmptyItem(): Product {
  return {
    name: "_EMPTY_ITEM_",
    aisle: 0,
    base_price: 0,
    discount_percentage: 0,
    id: "0",
    image_url: "none",
  };
}
