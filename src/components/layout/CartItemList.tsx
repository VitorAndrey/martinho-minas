import { useContext } from "react";
import { View, TouchableOpacity, Image, ViewProps } from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";

import { Product } from "@models/index";
import { calcTotalPrice, formatCurrentcy } from "@utils/currency";

import { BadgePercentIcon, Trash2 } from "lucide-react-native";

import { styles } from "@theme/inlineStyles";

import { Text } from "@ui/Text";

type CartItemProps = ViewProps & {
  product: Product;
};

export function CartItemList({ product, className, ...rest }: CartItemProps) {
  const { removeProduct } = useContext(ShoppingListContext);

  function handleRemoveProduct() {
    removeProduct(product);
  }

  return (
    <View
      style={styles.boxShadow}
      className="flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-2"
      {...rest}
    >
      <View className="relative h-16 w-16 pr-2">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full rounded-xl object-cover"
        />

        {product.discount_percentage > 0 && (
          <BadgePercentIcon
            color="black"
            className="absolute bottom-0 right-0 rounded-full bg-theme-green-300"
          />
        )}
      </View>

      <View className="flex-1 gap-1 px-4">
        <Text numberOfLines={1}>{product.name}</Text>
        <View className="flex-row items-center">
          <Text>R$ {calcTotalPrice(product)}</Text>
          {product.discount_percentage > 0 && (
            <Text className="ml-2 text-xs text-zinc-500 line-through">
              {formatCurrentcy(product.base_price)}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity className="p-2" onPress={handleRemoveProduct}>
        <Trash2 color="black" size={16} />
      </TouchableOpacity>
    </View>
  );
}
