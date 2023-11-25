import { ShoppingListContext } from "@contexts/ShoppingList";
import { Product } from "@models/index";
import { Text } from "@ui/Text";
import { calcTotalPrice } from "@utils/currency";
import { Trash2 } from "lucide-react-native";
import { useContext } from "react";
import { View, TouchableOpacity, Image } from "react-native";

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
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
      }}
      className="flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-2"
    >
      <View className="h-16 w-16 overflow-hidden rounded-xl">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full object-cover"
        />
      </View>

      <View className="flex-1 gap-1 px-4">
        <Text numberOfLines={1}>{product.name}</Text>
        <Text>R$ {calcTotalPrice(product)}</Text>
      </View>

      <TouchableOpacity className="p-2" onPress={handleRemoveProduct}>
        <Trash2 color="black" size={16} />
      </TouchableOpacity>
    </View>
  );
}
