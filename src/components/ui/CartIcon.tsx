import { useContext } from "react";
import { Text, View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { ShoppingListContext } from "@contexts/ShoppingList";

import { ShoppingCart } from "lucide-react-native";

type CartIconProps = ViewProps & {
  color: string;
};

export function CartIcon({ color, className, ...rest }: CartIconProps) {
  const { cartList } = useContext(ShoppingListContext);

  const cartLength = cartList.length;

  return (
    <View className={twMerge("relative", className)} {...rest}>
      <ShoppingCart color={color} />
      {cartLength > 0 && (
        <View className="absolute -top-2 -right-5 h-5 w-7 items-center justify-center rounded-full bg-theme-pink-300">
          <Text className="text-xs">{cartLength}</Text>
        </View>
      )}
    </View>
  );
}
