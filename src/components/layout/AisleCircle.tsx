import {
  DimensionValue,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

import { Aisle } from "@models/index";

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
        width: data.products.length < 1 ? 22 : size,
        height: data.products.length < 1 ? 22 : size,
        maxHeight: 150,
        maxWidth: 150,
        marginLeft,
      }}
      disabled={data.products.length < 1}
      className={twMerge(
        `my-2 ${
          data.products.length < 1 ? "bg-theme-gray-300" : "bg-theme-green-300"
        } flex-1 items-center justify-center self-center rounded-full`,
        className,
      )}
      {...rest}
    >
      <Text className={`${data.products.length < 1 ? "text-xs" : "text-lg"}`}>
        {data.AisleNumber}
      </Text>
    </TouchableOpacity>
  );
}
