import { Text } from "@ui/Text";
import { View } from "react-native";

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
