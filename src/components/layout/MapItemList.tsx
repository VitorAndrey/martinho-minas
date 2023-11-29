import { View, Text, ViewProps, Image } from "react-native";

import { Product } from "@models/index";

import { twMerge } from "tailwind-merge";
import { styles } from "@styles/inlineStyles";
import { calcTotalPrice, formatCurrentcy } from "@utils/currency";
import { BadgePercentIcon } from "lucide-react-native";
import colors from "@theme/colors";

type MapItemListProps = ViewProps & {
  product: Product;
};

export function MapItemList({ product, className, ...rest }: MapItemListProps) {
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

      {/* <View className="flex-row items-center gap-1">
        <Text className="text-base">R$ {calcTotalPrice(product)}</Text>
        <Text className="text-xs text-zinc-500 line-through">
          {formatCurrentcy(product.base_price)}
        </Text>
      </View> */}
    </View>
  );
}
