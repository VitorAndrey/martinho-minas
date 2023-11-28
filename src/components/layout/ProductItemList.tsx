import { useContext } from "react";
import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";

import { BadgeDollarSignIcon, BadgePercentIcon } from "lucide-react-native";

import colors from "@theme/colors";

import { Product } from "@models/index";
import { twMerge } from "tailwind-merge";
import { styles } from "@styles/inlineStyles";

import { Text } from "@ui/Text";

type ProductItemListProps = TouchableOpacityProps & {
  product: Product;
};

export function ProductItemList({
  className,
  product,
  ...rest
}: ProductItemListProps) {
  const { addProduct, cartList } = useContext(ShoppingListContext);

  function handleAddToCart() {
    if (!cartList.includes(product)) addProduct(product);
  }

  return (
    <TouchableOpacity
      style={styles.boxShadow}
      onPress={handleAddToCart}
      className={twMerge(
        "h-[58px] flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-4",
        className,
      )}
      {...rest}
    >
      <View className="relative h-10 w-10 pr-2">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full rounded-xl object-cover"
        />

        {product.discount_percentage > 0 && (
          <BadgePercentIcon
            color={colors["theme-icon"].active}
            className="absolute bottom-1 right-1 rounded-full bg-theme-green-300"
            size={16}
          />
        )}
      </View>

      <Text className="flex-1 pr-4" numberOfLines={1}>
        {product.name}
      </Text>

      <BadgeDollarSignIcon color={colors["theme-icon"].inactive} size={20} />
    </TouchableOpacity>
  );
}
