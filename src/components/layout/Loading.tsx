import { View, ActivityIndicator, ViewProps } from "react-native";

type LoadingProps = ViewProps & {};

export function Loading({ className, ...rest }: LoadingProps) {
  return (
    <View className="w-full flex-1 items-center justify-center" {...rest}>
      <ActivityIndicator />
    </View>
  );
}
