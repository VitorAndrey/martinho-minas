import { Product } from "@models/index";

import { createContext, useEffect, useState } from "react";

type ShoppingListContextProps = {
  cartList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
};

export const ShoppingListContext = createContext(
  {} as ShoppingListContextProps,
);

export function ShoppingListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartList, setCartList] = useState<Product[]>([]);

  function addProduct(product: Product) {
    setCartList((prevState) => [...prevState, product]);
  }

  function removeProduct(product: Product) {
    const filteredList = cartList.filter(
      (item) => item.id_products !== product.id_products,
    );
    setCartList(filteredList);
  }

  return (
    <ShoppingListContext.Provider
      value={{ addProduct, removeProduct, cartList }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}
