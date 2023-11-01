import axios from "axios";

export async function fetchProducts() {
  try {
    const response = await axios.get(
      "https://supermercadoapi.vercel.app/products",
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCategories() {
  try {
    const response = await axios.get(
      "https://supermercadoapi.vercel.app/classes",
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
