import {
  DimensionValue,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

import { MapAisle } from "@contexts/MapList";

import {
  BadgeCheckIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "lucide-react-native";

type AisleCircleProps = TouchableOpacityProps & {
  data: MapAisle;
  quantity: number;
  index: number;
  currentVisiting: boolean;
};

export function AisleCircle({
  data,
  quantity,
  className,
  currentVisiting,
  index,
  ...rest
}: AisleCircleProps) {
  const isAisleDone = data.products.every((product) => product.alreadyBought);

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

    if (data.products.length < 1)
      return `${marginLeft / 1.7 + repeatCount * 45}%`;
    return `${marginLeft + repeatCount * 45}%`;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        width: data.products.length < 1 ? 18 : size,
        height: data.products.length < 1 ? 18 : size,
        maxHeight: 150,
        maxWidth: 150,
        marginLeft,
      }}
      disabled={data.products.length < 1}
      className={twMerge(
        `my-2 ${
          data.products.length < 1 ? "bg-theme-gray-200" : "bg-theme-green-300"
        } relative flex-1 items-center justify-center self-center rounded-full border`,
        className,
      )}
      {...rest}
    >
      <Text className="mt-2 text-3xl">
        {data.products.length < 1 ? "" : data.AisleNumber}
      </Text>

      {currentVisiting && (
        <View className="absolute bottom-0 right-0 h-6 w-6 items-center justify-center rounded-full border bg-yellow-200 p-1">
          <ShoppingCartIcon size={14} color="black" />
        </View>
      )}

      {!(data.products.length < 1) && isAisleDone && !currentVisiting && (
        <View className="absolute bottom-0 right-0 h-6 w-6 items-center justify-center rounded-full p-1">
          <BadgeCheckIcon
            size={25}
            color="black"
            className="rounded-full bg-theme-green-500"
          />
        </View>
      )}

      {!(data.products.length < 1) && !isAisleDone && !currentVisiting && (
        <View className="absolute bottom-0 right-0 h-6 w-6 items-center justify-center rounded-full p-1">
          <XCircleIcon
            size={25}
            color="black"
            className="rounded-full bg-theme-pink-300"
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
