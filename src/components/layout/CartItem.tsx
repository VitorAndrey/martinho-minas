import { Product } from "@models/index";
import { View, Text } from "react-native";

type CartItemProps = {
  product: Product;
};

export function CartItem({ product }: CartItemProps) {
  return (
    <View>
      <Text>{product.name_products}</Text>
    </View>
  );
}
