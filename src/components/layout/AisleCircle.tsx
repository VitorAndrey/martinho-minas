import { Aisle } from "@models/index";
import { Text } from "@ui/Text";
import { View } from "react-native";

type AisleCircleProps = {
  data: Aisle;
};

export function AisleCircle({ data }: AisleCircleProps) {
  console.log(data);

  return (
    <View className="flex-1 columns-1">
      <View className="h-20 w-20 rounded-full bg-theme-green-300">
        <Text className="text-2xl ">{data.id}</Text>
      </View>
    </View>
  );
}
