import { Category } from "@models/index";
import { Text } from "@ui/Text";
import { TouchableOpacity } from "react-native";

export type IconeCategoriaProps = {
  active: boolean;
  data: Category;
  onPress: (category: Category) => void;
};

export function IconeCategoria({ active, data, onPress }: IconeCategoriaProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(data)}
      className={`flex h-10 items-center justify-center rounded-xl border  px-3 ${
        !active ? "border-zinc-200" : "border-theme-green-300"
      }`}
    >
      <Text className={`${!active ? "text-zinc-400" : "text-black"}`}>
        {data.name_class}
      </Text>
    </TouchableOpacity>
  );
}
