import { Aisle } from "@models/index";
import { Text } from "@ui/Text";
import { View } from "react-native";

type AisleCircleProps = {
  data: Aisle;
};

export function AisleCircle({ data }: AisleCircleProps) {
  console.log(data);

  return (
    <View className="h-20 w-20 items-center justify-center rounded-full bg-theme-green-300">
      <Text className="text-2xl ">{data.id}</Text>
    </View>
  );
}
