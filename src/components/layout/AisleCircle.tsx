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
  const size = 80 + quantity * 3;

  const marginLeft = calcMarginLeft(index);

  function calcMarginLeft(index: number): DimensionValue {
    const pattern = [
      0, -15, -30, -15, 0, 15, 30, 15, 0, -15, -30, -15, 0, 15, 30, 15, 0, -15,
      -30, -15, 0, 15, 30, 15, 0, -15, -30, -15, 0, 15, 30, 15, 0,
    ];
    const repeatCount = Math.floor(index / pattern.length);
    const patternIndex = index % pattern.length;

    const marginLeft =
      patternIndex < pattern.length ? pattern[patternIndex] : 0;
    return `${marginLeft + repeatCount * 45}%`;
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
