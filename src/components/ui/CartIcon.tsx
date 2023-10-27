import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react-native";
import { ShoppingListContext } from "@contexts/ShoppingList";

type CartIconProps = {
  color: string;
};

export function CartIcon({ color }: CartIconProps) {
  const { cartList } = useContext(ShoppingListContext);

  const cartLength = cartList.length;

  return (
    <View className="relative">
      <ShoppingCart color={color} />
      {cartLength > 0 && (
        <View className="absolute -top-2 -right-5 h-5 w-7 items-center justify-center rounded-full bg-red-300">
          <Text className="text-xs">{cartLength}</Text>
        </View>
      )}
    </View>
  );
}
