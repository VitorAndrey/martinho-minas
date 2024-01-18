import { useContext } from "react";
import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { styles } from "@styles/inlineStyles";
import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

import { Product } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";

import { BadgePercentIcon, CircleIcon } from "lucide-react-native";

import colors from "@theme/colors";

type ProductItemListProps = TouchableOpacityProps & {
  product: Product;
};

export function ProductItemList({
  className,
  product,
  ...rest
}: ProductItemListProps) {
  const { addProduct, removeProduct, cartList } =
    useContext(ShoppingListContext);

  const isInCart = cartList.some((item) => item.id === product.id);

  function handleAddToCart() {
    if (isInCart) {
      removeProduct(product);
    } else {
      addProduct(product);
    }
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

      {!isInCart ? (
        <CircleIcon color={colors["theme-icon"].active} size={16} />
      ) : (
        <CircleIcon
          color={colors["theme-icon"].active}
          size={16}
          className="rounded-full bg-theme-green-300"
        />
      )}
    </TouchableOpacity>
  );
}
