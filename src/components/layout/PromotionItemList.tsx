import { Image, View } from "react-native";

import { Product } from "@models/index";

import { Text } from "@ui/Text";

type PromotionItemListProps = {
  product: Product;
};

export function PromotionItemList({ product }: PromotionItemListProps) {
  return (
    <View className="flex-1 rounded-3xl bg-theme-green-300">
      <Image source={{ uri: product.imageUrl }} />

      <View className="items-center">
        <Text className="p-2">{product.name}</Text>
        <Text>{product.basePrice}</Text>
      </View>
    </View>
  );
}
