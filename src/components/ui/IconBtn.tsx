import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";

type IconBtnProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function IconBtn({ children, className, ...rest }: IconBtnProps) {
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
