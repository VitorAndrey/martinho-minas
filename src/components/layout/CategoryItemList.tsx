import { useEffect, useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

import { Category } from "@models/index";

export type IconeCategoriaProps = TouchableOpacityProps & {
  category: Category;
  onPress: (category: Category) => void;
  filter: string | null;
};

export function CategoryItemList({
  className,
  category,
  filter,
  onPress,
  ...rest
}: IconeCategoriaProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleSelectCategory() {
    onPress(category);
  }

  function handleCheckIfActive() {
    if (filter === category.id) {
      setIsActive(true);
    }
  }

  useEffect(() => {
    handleCheckIfActive();
  }, [filter]);

  return (
    <TouchableOpacity
      onPress={handleSelectCategory}
      className={twMerge(
        `flex h-10 items-center justify-center rounded-xl border px-3 ${
          isActive ? "bg-theme-green-300" : "border-theme-gray-300"
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
