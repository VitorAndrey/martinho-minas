import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Text } from "@ui/Text";
import { twMerge } from "tailwind-merge";

import { Category } from "@models/index";

export type IconeCategoriaProps = TouchableOpacityProps & {
  category: Category;
  onPress: (category: Category) => void;
  filtersList: string[];
};

export function CategoryItemList({
  className,
  category,
  filtersList,
  onPress,
  ...rest
}: IconeCategoriaProps) {
  const isActive = filtersList.some((item: string) => item === category.id);

  function handleSelectCategory() {
    onPress(category);
  }

  return (
    <TouchableOpacity
      onPress={handleSelectCategory}
      className={twMerge(
        `flex h-10 items-center justify-center rounded-xl border px-3 ${
          isActive ? "bg-theme-green-300" : "border-theme-gray-500"
        }`,
        className,
      )}
      {...rest}
    >
      <Text
        className={isActive ? "text-theme-gray-950" : "text-theme-gray-600"}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
