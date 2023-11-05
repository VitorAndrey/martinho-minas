import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";

type TextBtnProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function TextBtn({ children, disabled, ...rest }: TextBtnProps) {
  return (
    <TouchableOpacity disabled={disabled} {...rest} activeOpacity={0.6}>
      <Text
        className={`${
          disabled ? "!text-zinc-400" : "text-theme-green-500"
        } text-center font-semibold `}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
