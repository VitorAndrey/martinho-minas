import { View, ActivityIndicator, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

type LoadingProps = ViewProps & {};

export function Loading({ className, ...rest }: LoadingProps) {
  return (
    <View
      className={twMerge(
        "w-full flex-1 items-center justify-center",
        className,
      )}
      {...rest}
    >
      <ActivityIndicator color="#10C700" />
    </View>
  );
}
