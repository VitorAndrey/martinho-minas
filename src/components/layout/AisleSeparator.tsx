import { View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

type AisleSeparatorProps = ViewProps;

export function AisleSeparator({ className, ...rest }: AisleSeparatorProps) {
  return (
    <View
      className={twMerge("h-12 w-px self-center bg-theme-pink-300", className)}
      {...rest}
    ></View>
  );
}
