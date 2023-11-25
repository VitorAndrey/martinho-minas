import { View, Text, ViewProps } from "react-native";

import { Product } from "@models/index";

import { twMerge } from "tailwind-merge";

type MapItemListProps = ViewProps & {
  product: Product;
};

export function MapItemList({ product, className, ...rest }: MapItemListProps) {
  return (
    <View className={twMerge("", className)} {...rest}>
      <Text>{product.name}</Text>
    </View>
  );
}
