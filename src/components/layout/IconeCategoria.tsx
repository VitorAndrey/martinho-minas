import { Category } from "@models/index";
import { Text } from "@ui/Text";
import { TouchableOpacity, Image } from "react-native";

export type IconeCategoriaProps = {
  data: Category;
  onAddCategory: (category: Category) => void;
};

export function IconeCategoria({ data, onAddCategory }: IconeCategoriaProps) {
  return (
    <TouchableOpacity
      onPress={() => onAddCategory(data)}
      className={`flex h-[122] w-[123] items-center justify-center rounded-3xl bg-[${data.color}]`}
    >
      <Text>{data.name}</Text>
      <Image
        className="h-10 w-10"
        source={{ uri: "https://github.com/Ana.png" }}
      />
    </TouchableOpacity>
  );
}
