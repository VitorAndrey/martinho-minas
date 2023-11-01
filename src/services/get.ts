import axios from "axios";

import { Category, Product } from "@models/index";

export async function fetchProducts(
  filtersList?: string[],
): Promise<Product[]> {
  let data = null;
  try {
    const response = await axios.get(
      "https://supermercadoapi.vercel.app/products",
    );
    data = response.data;
  } catch (error) {
    console.error(error);
  }

  return data;
}

export async function fetchCategories(): Promise<Category[]> {
  let data = null;
  try {
    const response = await axios.get(
      "https://supermercadoapi.vercel.app/classes",
    );
    data = response.data;
  } catch (error) {
    console.error(error);
  }
  return data;
}
