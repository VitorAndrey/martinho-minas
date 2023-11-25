import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Category } from "@models/index";

import { Text } from "@ui/Text";

export type IconeCategoriaProps = TouchableOpacityProps & {
  category: Category;
  onPress: (category: Category) => void;
};

export function CategoryItemList({
  className,
  category,
  onPress,
  ...rest
}: IconeCategoriaProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleSelectCategory() {
    setIsActive((prev) => !prev);

    onPress(category);
  }

  const border = isActive ? "border-green-300" : "border-zinc-300";
  const text = isActive ? "text-black" : "text-zinc-400";

  return (
    <TouchableOpacity
      onPress={handleSelectCategory}
      className={twMerge(
        `flex h-10 items-center justify-center rounded-xl border px-3 ${border}`,
        className,
      )}
      {...rest}
    >
      <Text className={text}>{category.name}</Text>
    </TouchableOpacity>
  );
}
