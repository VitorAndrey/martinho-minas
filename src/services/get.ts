import axios from "axios";

import { Category, Product } from "@models/index";

export async function fetchProducts(
  filtersList?: string[],
): Promise<Product[]> {
  let data = null;
  let url = "https://supermercadoapi.vercel.app/products";

  if (filtersList && filtersList?.length > 0) {
    url += "?classes=" + filtersList.join();
  }

  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    console.error(error);
  }

  return data;
}

export async function fetchCategories(): Promise<Category[]> {
  let data = null;
  const url = "https://supermercadoapi.vercel.app/classes";

  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    console.error(error);
  }

  return data;
}
