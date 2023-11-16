import { Product } from "@models/index";
import { View, Text } from "react-native";

type MapItemListProps = {
  product: Product;
};

export function MapItemList({ product }: MapItemListProps) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
