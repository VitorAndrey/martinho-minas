import { ReactNode, createContext, useState } from "react";

import { Product } from "@models/index";

type ShoppingListContextProps = {
  cartList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
};

export const ShoppingListContext = createContext(
  {} as ShoppingListContextProps,
);

export function ShoppingListProvider({ children }: { children: ReactNode }) {
  const [cartList, setCartList] = useState<Product[]>([]);

  function addProduct(product: Product) {
    setCartList((prevState) => [...prevState, product]);
  }

  function removeProduct(product: Product) {
    const filteredList = cartList.filter((item) => item.id !== product.id);
    setCartList(filteredList);
  }

  function clearCart() {
    setCartList([]);
  }

  return (
    <ShoppingListContext.Provider
      value={{ addProduct, removeProduct, cartList, clearCart }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}
