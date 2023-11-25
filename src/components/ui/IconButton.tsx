import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { twMerge } from "tailwind-merge";

type IconBtnProps = TouchableOpacityProps & {
  children: ReactNode;
};

export function IconButton({ children, className, ...rest }: IconBtnProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        "h-12 w-12 items-center justify-center rounded-2xl bg-theme-pink-300",
        className,
      )}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
