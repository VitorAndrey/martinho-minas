import { ActivityIndicator, View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

import colors from "@theme/colors";

type LoadingProps = ViewProps;

export function Loading({ className, ...rest }: LoadingProps) {
  return (
    <View
      className={twMerge(
        "w-full flex-1 items-center justify-center",
        className,
      )}
      {...rest}
    >
      <ActivityIndicator color={colors["theme-green"][500]} />
    </View>
  );
}
