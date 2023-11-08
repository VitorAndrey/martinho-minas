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

export async function fetchPromotions(): Promise<Product[]> {
  //  let data = null;

  const data = [
    {
      id: "1",
      name: "Batata",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },
    {
      id: "2",
      name: "Maca",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },
    {
      id: "3",
      name: "Pera",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },
    {
      id: "4",
      name: "Morango",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },

    {
      id: "5",
      name: "Marshmallow",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },

    {
      id: "6",
      name: "Jujuba",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },

    {
      id: "7",
      name: "Caju",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },

    {
      id: "8",
      name: "Beterraba",
      imageUrl: "https://github.com/ana",
      basePrice: 99.99,
      discountPercentage: 5,
    },
  ];

  // const url = "https://supermercadoapi.vercel.app/promotions";

  // try {
  //   const response = await axios.get(url);
  //   data = response.data;
  // } catch (error) {
  //   console.log(error);
  // }

  return data;
}

export async function fetchShoppingRoute(shoppingList: Product[]) {
  let data = null;

  data = [
    {
      aisle: 1,
      products: [
        {
          id: "1",
          name: "Arroz",
        },
        {
          id: "4",
          name: "Feijão",
        },
      ],
      promotions: [
        {
          id: "8",
          name: "macarrao",
        },
        {
          id: "22",
          name: "Molho de tomate",
        },
      ],
    },
    {
      aisle: 5,
      products: [
        {
          id: "65",
          name: "Shampoo",
        },
        {
          id: "67",
          name: "Condicionador",
        },
      ],
      promotions: [
        {
          id: "79",
          name: "Sabonete",
        },
        {
          id: "75",
          name: "Pasta de dente",
        },
      ],
    },
  ];

  // const url = "https://supermercadoapi.vercel.app/shoppingroute";

  // try {
  //   const response = await axios.post(url, shoppingList);
  //   data = response.data;
  // } catch (error) {
  //   console.log(error);
  // }

  return data;
}
