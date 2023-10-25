import { View, TextInput } from "react-native";
import React from "react";
import { Text } from "./Text";

export function Input() {
  return (
    <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2]">
      <Text className="text-lg font-semibold">Senha:</Text>
      <TextInput className="w-[190] pb-3 text-base" />
    </View>
  );
}
