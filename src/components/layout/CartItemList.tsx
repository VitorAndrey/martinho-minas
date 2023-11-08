import { Product } from "@models/index";
import { View, Text } from "react-native";

type CartItemProps = {
  product: { name: string };
};

export function CartItemList({ product }: CartItemProps) {
  return (
    <View>
      <Text>{product.name_products}</Text>
    </View>
  );
}
