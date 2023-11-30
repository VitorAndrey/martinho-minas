import { View, Text, ViewProps, Image, TouchableOpacity } from "react-native";

import { Product } from "@models/index";

import { twMerge } from "tailwind-merge";
import { styles } from "@styles/inlineStyles";
import {
  BadgeCheckIcon,
  BadgePercentIcon,
  Trash2Icon,
} from "lucide-react-native";
import colors from "@theme/colors";
import { Button } from "@ui/Button";
import { useState } from "react";

type MapItemListProps = ViewProps & {
  product: Product;
  isPromotional?: boolean;
};

export function MapItemList({
  isPromotional,
  product,
  className,
  ...rest
}: MapItemListProps) {
  const [alreadyBought, setAlreadyBought] = useState<boolean>(false);

  function handleAlreadyBought() {
    setAlreadyBought((prev) => !prev);
  }

  return (
    <View
      style={styles.boxShadow}
      className={twMerge(
        "h-full w-40 flex-1 items-center rounded-3xl border border-zinc-200 bg-zinc-50 p-3",
        className,
      )}
      {...rest}
    >
      <Text className="mb-2 p-1 text-center" numberOfLines={1}>
        {product.name}
      </Text>

      <View className="relative h-24 w-24 flex-1 pr-2">
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

      {!isPromotional && (
        <>
          <Button
            onPress={handleAlreadyBought}
            className={`mt-4 h-8 w-full rounded-xl ${
              alreadyBought && "bg-theme-gray-200"
            }`}
            textClassName="text-xs"
          >
            {alreadyBought ? "Não adicionei" : "Adicionei"}
          </Button>

          {alreadyBought ? (
            <View className="absolute -top-2 -left-2 h-8 w-8 items-center justify-center rounded-xl bg-theme-green-300">
              <BadgeCheckIcon color={colors["theme-icon"].active} size={20} />
            </View>
          ) : (
            <TouchableOpacity className="absolute -top-2 -left-2 h-8 w-8 items-center justify-center rounded-xl bg-theme-pink-300">
              <Trash2Icon color={colors["theme-icon"].active} size={20} />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
}
