import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";

type BtnProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function Btn({ children, ...rest }: BtnProps) {
  return (
    <TouchableOpacity
      className="bg-theme-green-100 h-12 items-center justify-center rounded-2xl"
      activeOpacity={0.6}
      {...rest}
    >
      <Text className="text-base font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}
