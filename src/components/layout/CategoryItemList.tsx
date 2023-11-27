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

  return (
    <TouchableOpacity
      disabled
      onPress={handleSelectCategory}
      className={twMerge(
        `flex h-10 items-center justify-center rounded-xl border px-3 ${
          isActive ? "border-theme-green-300" : "border-theme-gray-300"
        }`,
        className,
      )}
      {...rest}
    >
      <Text
        className={isActive ? "text-theme-gray-950" : "text-theme-gray-400"}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
