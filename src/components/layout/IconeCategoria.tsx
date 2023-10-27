import { Category } from "@models/index";
import { Text } from "@ui/Text";
import { TouchableOpacity } from "react-native";

export type IconeCategoriaProps = {
  data: Category;
  onPress: (category: Category) => void;
};

export function IconeCategoria({ data, onPress }: IconeCategoriaProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(data)}
      className={`flex h-10 items-center justify-center rounded-xl border px-3 bg-[${data.color}]`}
    >
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
}
