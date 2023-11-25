import { View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Text } from "@ui/Text";

type EmptyCartProps = ViewProps & {};

export function EmptyCart({ className, ...rest }: EmptyCartProps) {
  return (
    <View
      className={twMerge("flex-1 items-center justify-center", className)}
      {...rest}
    >
      <Text className="text-zinc-500">O carrinho está vazio.</Text>
      <Text className="text-zinc-500">Adicione items para iniciar.</Text>
    </View>
  );
}
