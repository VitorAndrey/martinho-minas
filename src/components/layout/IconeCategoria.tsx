import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Text } from "@ui/Text";

import { Category } from "@models/index";
import { twMerge } from "tailwind-merge";

export type IconeCategoriaProps = TouchableOpacityProps & {
  activeFilter: string[];
  category: Category;
  onPress: (category: Category) => void;
};

export function IconeCategoria({
  className,
  activeFilter,
  category,
  onPress,
  ...rest
}: IconeCategoriaProps) {
  const isActive = activeFilter.includes(category.id);
  const border = isActive ? "border-green-200" : "border-zinc-300";

  return (
    <TouchableOpacity
      onPress={() => onPress(category)}
      className={twMerge(
        `flex h-12 items-center justify-center rounded-xl border px-3 ${border}`,
        className,
      )}
      {...rest}
    >
      <Text className={`${!isActive ? "text-zinc-600" : "text-black"}`}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
