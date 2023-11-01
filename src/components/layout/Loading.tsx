import { View, Text, ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <View className="w-full flex-1 items-center justify-center">
      <ActivityIndicator />
    </View>
  );
}
