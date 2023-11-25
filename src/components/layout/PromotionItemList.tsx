import { Image, View, ViewProps } from "react-native";

import { Product } from "@models/index";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";
import { calcTotalPrice, formatCurrentcy } from "@utils/currency";
import { Btn } from "@ui/Btn";
import { useContext } from "react";
import { ShoppingListContext } from "@contexts/ShoppingList";

type PromotionItemListProps = ViewProps & {
  product: Product;
};

export function PromotionItemList({
  className,
  product,
  ...rest
}: PromotionItemListProps) {
  const { addProduct, cartList, removeProduct } =
    useContext(ShoppingListContext);

  const isInCart = cartList.includes(product);

  function handleAddProduct() {
    addProduct(product);
  }

  function handleRemoveProduct() {
    removeProduct(product);
  }

  if (product.name === "_EMPTY_ITEM_")
    return <View className="h-52 flex-1"></View>;

  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
      }}
      className={twMerge(
        "h-64 flex-1 items-center rounded-3xl border border-zinc-200 bg-zinc-50 p-3",
        className,
      )}
      {...rest}
    >
      <Text className="p-1 text-center">{product.name}</Text>

      <Image source={{ uri: product.image_url }} className="flex-1" />

      <View className="flex-row items-center gap-1">
        <Text className="text-base">R$ {calcTotalPrice(product)}</Text>
        <Text className="text-xs text-zinc-500 line-through">
          {formatCurrentcy(product.base_price)}
        </Text>
      </View>

      {isInCart ? (
        <Btn
          className="mt-1 h-10 w-full bg-theme-pink-300"
          textClassName="text-sm"
          onPress={handleRemoveProduct}
        >
          Remover
        </Btn>
      ) : (
        <Btn
          className="mt-1 h-10 w-full"
          textClassName="text-sm"
          onPress={handleAddProduct}
        >
          Adicionar
        </Btn>
      )}
    </View>
  );
}
