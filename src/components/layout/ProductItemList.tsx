import { View, TouchableOpacity } from "react-native";

import { PlusCircle } from "lucide-react-native";

import { Text } from "@ui/Text";
import { Product } from "@models/index";

type ProductItemListProps = {
  product: Product;
};

export function ProductItemList({ product }: ProductItemListProps) {
  return (
    <View className="flex-row items-center rounded-2xl bg-zinc-200 p-4">
      <Text className="flex-1">{product.name}</Text>

      <TouchableOpacity>
        <PlusCircle color="black" />
      </TouchableOpacity>
    </View>
  );
}
