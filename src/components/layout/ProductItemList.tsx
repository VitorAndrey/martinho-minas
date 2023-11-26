import { useContext, useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";

import { CircleIcon } from "lucide-react-native";

import colors from "@theme/colors";

import { Product } from "@models/index";
import { twMerge } from "tailwind-merge";
import { styles } from "@styles/inlineStyles";

import { Text } from "@ui/Text";

type ProductItemListProps = TouchableOpacityProps & {
  product: Product;
  isInCart: boolean;
};

export function ProductItemList({
  className,
  product,
  isInCart,
  ...rest
}: ProductItemListProps) {
  const { addProduct, removeProduct } = useContext(ShoppingListContext);

  function handleAddToCart() {
    if (isInCart) {
      removeProduct(product);
    } else {
      addProduct(product);
    }
  }

  return (
    <TouchableOpacity
      style={styles.boxShadow}
      onPress={handleAddToCart}
      className={twMerge(
        "h-[58px] flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-4",
        className,
      )}
      {...rest}
    >
      <View className="mr-3 h-8 w-8 overflow-hidden rounded-xl">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full object-cover"
        />
      </View>

      <Text className="flex-1 pr-4" numberOfLines={1}>
        {product.name}
      </Text>

      {!isInCart ? (
        <CircleIcon color={colors["theme-icon"].active} size={16} />
      ) : (
        <CircleIcon
          color={colors["theme-icon"].active}
          size={16}
          className="rounded-full bg-theme-green-300"
        />
      )}
    </TouchableOpacity>
  );
}
