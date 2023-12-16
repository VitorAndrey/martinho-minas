import { useContext } from "react";
import { Image, TouchableOpacity, View, ViewProps } from "react-native";

import { styles } from "@styles/inlineStyles";
import { Text } from "@ui/Text";
import { calcTotalPrice, formatCurrentcy } from "@utils/currency";
import { twMerge } from "tailwind-merge";

import { Product } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";

import { BadgePercentIcon, Trash2 } from "lucide-react-native";

import colors from "@theme/colors";

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
      className={twMerge(
        "h-20 flex-row items-center rounded-2xl border border-theme-gray-200 bg-theme-gray-50 p-2",
        className,
      )}
      {...rest}
    >
      <View className="relative h-16 w-16 pr-2">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full rounded-xl object-cover"
        />

        {product.discount_percentage > 0 && (
          <BadgePercentIcon
            color={colors["theme-icon"].active}
            className="absolute bottom-0 right-0 rounded-full bg-theme-green-300"
          />
        )}
      </View>

      <View className="flex-1 px-4">
        <Text numberOfLines={1}>{product.name}</Text>
        <View className="flex-row items-center">
          <Text>R$ {calcTotalPrice(product)}</Text>
          {product.discount_percentage > 0 && (
            <Text className="ml-2 text-xs text-theme-gray-500 line-through">
              {formatCurrentcy(product.base_price)}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity className="p-2" onPress={handleRemoveProduct}>
        <Trash2 color={colors["theme-icon"].active} size={16} />
      </TouchableOpacity>
    </View>
  );
}
