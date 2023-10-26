import { View, ViewProps } from "react-native";
import { Logo } from "./Logo";
import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

type HeaderProps = ViewProps & {};

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <View
      className={twMerge(
        "h-20 flex-row items-center justify-center gap-1 ",
        className,
      )}
      {...rest}
    >
      <Logo />

      <Text className="text-2xl font-bold">Martinho de Minas</Text>
    </View>
  );
}
