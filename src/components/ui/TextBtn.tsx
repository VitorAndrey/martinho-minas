import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";

type TextBtnProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function TextBtn({ children, ...rest }: TextBtnProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.6}>
      <Text className="text-theme-green-500 text-center font-semibold">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
