import { Aisle } from "@models/index";
import { Text } from "@ui/Text";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type AisleCircleProps = TouchableOpacityProps & {
  data: Aisle;
};

export function AisleCircle({ data, ...rest }: AisleCircleProps) {
  console.log(data);

  return (
    <TouchableOpacity
      className="h-20 w-20 flex-1 rounded-full bg-theme-green-300"
      {...rest}
    >
      <Text className="text-2xl ">{data.id}</Text>
    </TouchableOpacity>
  );
}
