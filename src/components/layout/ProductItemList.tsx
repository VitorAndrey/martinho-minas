import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { CircleIcon } from "lucide-react-native";

import { Text } from "@ui/Text";
import { Product } from "@models/index";
import { twMerge } from "tailwind-merge";
import { useContext, useEffect, useState } from "react";
import { ShoppingListContext } from "@contexts/ShoppingList";

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

  const [isInCart, setIsInCart] = useState<boolean>(cartList.includes(product));

  function handleAddToCart() {
    setIsInCart((prev) => !prev);

    if (cartList.includes(product)) {
      removeProduct(product);
    } else {
      addProduct(product);
    }
  }

  useEffect(() => {
    setIsInCart(cartList.includes(product));
  }, [cartList]);

  return (
    <TouchableOpacity
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
        height: 50,
      }}
      onPress={handleAddToCart}
      className={twMerge(
        "flex-row items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-4",
        className,
      )}
      {...rest}
    >
      <View className="mr-3 h-8 w-8 overflow-hidden rounded-xl">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full object-cover"
        />
      </View>

      <Text className="flex-1 pr-4" numberOfLines={1}>
        {product.name}
      </Text>

      {!isInCart ? (
        <CircleIcon color="black" size={16} />
      ) : (
        <CircleIcon
          color="black"
          size={16}
          className="rounded-full bg-theme-green-300"
        />
      )}
    </TouchableOpacity>
  );
}
