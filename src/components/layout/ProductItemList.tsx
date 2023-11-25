import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Plus, Trash2 } from "lucide-react-native";

import { Text } from "@ui/Text";
import { Product } from "@models/index";
import { twMerge } from "tailwind-merge";
import { useContext, useEffect, useState } from "react";
import { ShoppingListContext } from "@contexts/ShoppingList";

type ProductItemListProps = TouchableOpacityProps & {
  product: Product;
};

export function ProductItemList({
  className,
  product,
  ...rest
}: ProductItemListProps) {
  const { addProduct, removeProduct, cartList } =
    useContext(ShoppingListContext);

  function handleAddToCart() {
    if (cartList.includes(product)) {
      removeProduct(product);
    } else {
      addProduct(product);
    }
  }

  const isInCart = cartList.includes(product);

  return (
    <TouchableOpacity
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
        height: 50,
      }}
      onPress={handleAddToCart}
      className={twMerge(
        `flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-4 ${
          isInCart && "bg-theme-green-300"
        }`,
        className,
      )}
      {...rest}
    >
      <Text className="flex-1 pr-4" numberOfLines={1}>
        {product.name}
      </Text>

      {!isInCart ? (
        <Plus color="black" size={16} />
      ) : (
        <Trash2 color="black" size={16} />
      )}
    </TouchableOpacity>
  );
}
