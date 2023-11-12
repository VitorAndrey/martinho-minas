import { ShoppingListContext } from "@contexts/ShoppingList";
import { Product } from "@models/index";
import { Trash2 } from "lucide-react-native";
import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

type CartItemProps = {
  product: Product;
};

export function CartItemList({ product }: CartItemProps) {
  const { removeProduct } = useContext(ShoppingListContext);

  function handleRemoveProduct() {
    removeProduct(product);
  }

  return (
    <View
      className="flex-row items-center rounded-2xl bg-zinc-200 px-4 pr-2"
      style={{ height: 50 }}
    >
      <Text className="flex-1" numberOfLines={1}>
        {product.name}
      </Text>

      <TouchableOpacity className="p-2" onPress={handleRemoveProduct}>
        <Trash2 color="black" size={16} />
      </TouchableOpacity>
    </View>
  );
}
