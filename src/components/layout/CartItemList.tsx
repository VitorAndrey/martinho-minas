import { Product } from "@models/index";
import { Trash2 } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";

type CartItemProps = {
  product: Product;
};

export function CartItemList({ product }: CartItemProps) {
  return (
    <View
      className="flex-row items-center rounded-2xl bg-zinc-200 px-4 pr-2"
      style={{ height: 50 }}
    >
      <Text className="flex-1">{product.name}</Text>

      <TouchableOpacity className="p-2">
        <Trash2 color="black" size={16} />
      </TouchableOpacity>
    </View>
  );
}
