import { View, ViewProps } from "react-native";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

type InputErrorMessageProps = ViewProps & {
  message: string | undefined;
};

export function InputErrorMessage({
  message,
  className,
  ...rest
}: InputErrorMessageProps) {
  return (
    <View className={twMerge("h-6 justify-center px-2", className)} {...rest}>
      {message && <Text className="text-xs text-theme-red-500">{message}</Text>}
    </View>
  );
}
