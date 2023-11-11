import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Plus, Trash2 } from "lucide-react-native";

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
  const [isInCart, setIsInCart] = useState<boolean>(false);

  const { addProduct, removeProduct } = useContext(ShoppingListContext);

  function handleAddToCart() {
    if (isInCart) {
      setIsInCart(false);
      removeProduct(product);
    } else {
      setIsInCart(true);
      addProduct(product);
    }
  }

  useEffect(() => {}, [isInCart]);

  return (
    <TouchableOpacity
      onPress={handleAddToCart}
      className={twMerge(
        "flex-row items-center rounded-2xl bg-zinc-200 px-4",
        className,
      )}
      style={{ height: 50 }}
      {...rest}
    >
      <Text className="flex-1 pr-4" numberOfLines={1}>
        {product.name}
      </Text>

      {isInCart ? (
        <Trash2 color="black" size={16} />
      ) : (
        <Plus color="black" size={18} />
      )}
    </TouchableOpacity>
  );
}
