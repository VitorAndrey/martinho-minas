import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";

type BtnProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function Btn({ children, ...rest }: BtnProps) {
  return (
    <TouchableOpacity
      className="h-12 flex-row items-center justify-center rounded-2xl bg-theme-green-300"
      activeOpacity={0.6}
      {...rest}
    >
      <Text className="text-base font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}
