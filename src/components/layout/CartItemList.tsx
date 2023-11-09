import { Product } from "@models/index";
import { View, Text } from "react-native";

type CartItemProps = {
  product: Product;
};

export function CartItemList({ product }: CartItemProps) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
