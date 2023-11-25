import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./Text";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BtnProps = TouchableOpacityProps & {
  children: ReactNode;
  textClassName?: string;
};

export function Btn({ children, className, textClassName, ...rest }: BtnProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        "h-12 flex-row items-center justify-center rounded-2xl bg-theme-green-300",
        className,
      )}
      activeOpacity={0.6}
      {...rest}
    >
      <Text className={twMerge("text-base font-semibold", textClassName)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
