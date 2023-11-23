import axios from "axios";

import { Aisle, Category, Product } from "@models/index";

export async function fetchProducts(filtersList: string[]): Promise<Product[]> {
  let data = null;
  let url = "https://supermercadoapi.vercel.app/products";

  if (filtersList?.length > 0) {
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

export async function fetchPromotions(): Promise<Product[]> {
  let data = null;

  const url = "https://supermercadoapi.vercel.app/promotions";

  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (error) {
    console.log(error);
  }

  return data;
}

export async function fetchShoppingRoute(
  shoppingList?: Product[],
): Promise<Aisle[] | null> {
  if (!shoppingList) return null;

  const shoppingListIds = shoppingList.map((product) => product.id);

  let data = null;

  const url = "https://supermercadoapi.vercel.app/shoppingroutes";

  try {
    const response = await axios.post(url, shoppingListIds);
    data = response.data;
  } catch (error) {
    console.log(error);
  }

  return data;
}
