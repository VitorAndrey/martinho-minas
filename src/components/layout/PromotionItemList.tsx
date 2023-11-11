import { Image, View, ViewProps } from "react-native";

import { Product } from "@models/index";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";
import { calcTotalPrice, formatCurrentcy } from "@utils/currency";

type PromotionItemListProps = ViewProps & {
  product: Product;
};

export function PromotionItemList({
  className,
  product,
  ...rest
}: PromotionItemListProps) {
  if (product.name === "_EMPTY_ITEM_")
    return <View className="h-52 flex-1"></View>;

  return (
    <View
      className={twMerge(
        "h-52 flex-1 items-center rounded-3xl bg-theme-green-300 p-4",
        className,
      )}
      {...rest}
    >
      <Text className="p-2 text-center">{product.name}</Text>

      <Image source={{ uri: product.image_url }} className="flex-1" />

      <View className="flex-row items-center gap-1">
        <Text>R$ {calcTotalPrice(product)}</Text>
        <Text className="text-xs line-through">
          {formatCurrentcy(product.base_price)}
        </Text>
      </View>
    </View>
  );
}
