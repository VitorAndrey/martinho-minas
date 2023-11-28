import {
  DimensionValue,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { twMerge } from "tailwind-merge";

import { Aisle } from "@models/index";

import { Text } from "@ui/Text";

type AisleCircleProps = TouchableOpacityProps & {
  data: Aisle;
  quantity: number;
  index: number;
};

export function AisleCircle({
  data,
  quantity,
  className,
  index,
  ...rest
}: AisleCircleProps) {
  const size = 100 + quantity * 4;

  const marginLeft = calcMarginLeft(index);

  function calcMarginLeft(index: number): DimensionValue {
    return "-10%";
  }

  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        maxHeight: 150,
        maxWidth: 150,
        marginLeft,
      }}
      className={twMerge(
        "flex-1 items-center justify-center self-center rounded-full bg-theme-green-300",
        className,
      )}
      {...rest}
    >
      <Text className="text-xl">{data.AisleNumber}</Text>
    </TouchableOpacity>
  );
}
