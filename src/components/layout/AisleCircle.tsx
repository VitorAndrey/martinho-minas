import { Aisle } from "@models/index";
import { Text } from "@ui/Text";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type AisleCircleProps = TouchableOpacityProps & {
  data: Aisle;
};

export function AisleCircle({ data, ...rest }: AisleCircleProps) {
  return (
    <TouchableOpacity
      className="h-20 w-20 flex-1 items-center justify-center self-center rounded-full bg-theme-green-300"
      {...rest}
    >
      <Text className="text-xl">{data.AisleNumber}</Text>
    </TouchableOpacity>
  );
}
