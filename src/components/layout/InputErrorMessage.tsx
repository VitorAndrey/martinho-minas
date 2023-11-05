import { View } from "react-native";
import React from "react";
import { Text } from "@ui/Text";

type InputErrorMessageProps = {
  message: string | undefined;
};

export function InputErrorMessage({ message }: InputErrorMessageProps) {
  return (
    <View className="h-6 justify-center px-2">
      {message && <Text className="text-xs text-theme-red-500">{message}</Text>}
    </View>
  );
}
