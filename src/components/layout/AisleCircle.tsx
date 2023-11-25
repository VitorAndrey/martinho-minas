import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Aisle } from "@models/index";

import { Text } from "@ui/Text";

type AisleCircleProps = TouchableOpacityProps & {
  data: Aisle;
};

export function AisleCircle({ data, className, ...rest }: AisleCircleProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        "h-20 w-20 flex-1 items-center justify-center self-center rounded-full bg-theme-green-300",
        className,
      )}
      {...rest}
    >
      <Text className="text-xl">{data.AisleNumber}</Text>
    </TouchableOpacity>
  );
}
