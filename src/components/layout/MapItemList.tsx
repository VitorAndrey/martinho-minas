import { View, Text, ViewProps, Image } from "react-native";

import { Product } from "@models/index";

import { twMerge } from "tailwind-merge";
import { styles } from "@styles/inlineStyles";
import { calcTotalPrice, formatCurrentcy } from "@utils/currency";

type MapItemListProps = ViewProps & {
  product: Product;
};

export function MapItemList({ product, className, ...rest }: MapItemListProps) {
  return (
    <View
      style={styles.boxShadow}
      className={twMerge(
        "w-40 flex-1 items-center rounded-3xl border border-zinc-200 bg-zinc-50 p-3",
        className,
      )}
      {...rest}
    >
      <Text className="p-1 text-center" numberOfLines={1}>
        {product.name}
      </Text>

      <View className="h-full w-full flex-1 overflow-hidden rounded-xl p-4">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full object-cover"
        />
      </View>

      <View className="flex-row items-center gap-1">
        <Text className="text-base">R$ {calcTotalPrice(product)}</Text>
        <Text className="text-xs text-zinc-500 line-through">
          {formatCurrentcy(product.base_price)}
        </Text>
      </View>
    </View>
  );
}
