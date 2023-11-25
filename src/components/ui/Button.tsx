import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Text } from "./Text";

type BtnProps = TouchableOpacityProps & {
  children: ReactNode;
  textClassName?: string;
  icon?: () => ReactNode;
};

export function Button({
  children,
  className,
  icon,
  textClassName,
  ...rest
}: BtnProps) {
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

      {icon && icon()}
    </TouchableOpacity>
  );
}
