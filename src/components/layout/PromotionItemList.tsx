import { Image, View, ViewProps } from "react-native";

import { Product } from "@models/index";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

type PromotionItemListProps = ViewProps & {
  product: Product;
};

export function PromotionItemList({
  className,
  product,
  ...rest
}: PromotionItemListProps) {
  return (
    <View
      className={twMerge("flex-1 rounded-3xl bg-theme-green-300", className)}
      {...rest}
    >
      <Image source={{ uri: product.imageUrl }} />

      <View className="items-center">
        <Text className="p-2">{product.name}</Text>
        <Text>{product.basePrice}</Text>
      </View>
    </View>
  );
}
