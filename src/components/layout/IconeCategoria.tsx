import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Text } from "@ui/Text";

import { Category } from "@models/index";
import { twMerge } from "tailwind-merge";

export type IconeCategoriaProps = TouchableOpacityProps & {
  active?: boolean;
  category: Category;
  onPress: (category: Category) => void;
};

export function IconeCategoria({
  className,
  active,
  category,
  onPress,
  ...rest
}: IconeCategoriaProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(category)}
      className={twMerge(
        `flex h-10 items-center justify-center rounded-xl border  px-3 ${
          !active ? "border-zinc-200" : "border-theme-green-300"
        }`,
        className,
      )}
      {...rest}
    >
      <Text className={`${!active ? "text-zinc-400" : "text-black"}`}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
