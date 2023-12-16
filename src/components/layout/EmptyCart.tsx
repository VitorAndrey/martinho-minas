import { View, ViewProps } from "react-native";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

type EmptyCartProps = ViewProps;

export function EmptyCart({ className, ...rest }: EmptyCartProps) {
  return (
    <View
      className={twMerge("flex-1 items-center justify-center", className)}
      {...rest}
    >
      <Text className="text-theme-gray-500">O carrinho está vazio.</Text>
      <Text className="text-theme-gray-500">Adicione items para iniciar.</Text>
    </View>
  );
}
