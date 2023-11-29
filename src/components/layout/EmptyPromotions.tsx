import { View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Text } from "@ui/Text";

type EmptyPromotionsProps = ViewProps & {};

export function EmptyPromotions({ className, ...rest }: EmptyPromotionsProps) {
  return (
    <View
      className={twMerge("flex-1 items-center justify-center", className)}
      {...rest}
    >
      <Text className="text-theme-gray-500">Sem promoções.</Text>
      <Text className="text-theme-gray-500">Tente novamente mais tarde.</Text>
    </View>
  );
}
