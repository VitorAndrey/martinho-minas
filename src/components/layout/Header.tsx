import { View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Logo } from "./Logo";
import { Text } from "@ui/Text";

type HeaderProps = ViewProps & {};

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <View
      className={twMerge(
        "mt-8 h-12 flex-row items-center justify-center gap-1",
        className,
      )}
      {...rest}
    >
      <Logo />

      <Text className="font-poppins-600 text-2xl">Martinho de Minas</Text>
    </View>
  );
}
