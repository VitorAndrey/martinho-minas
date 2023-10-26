import { Category } from "@models/index";
import { Text } from "@ui/Text";
import { TouchableOpacity, Image } from "react-native";

export type IconeCategoriaProps = {
  data: Category;
  onPress: (category: Category) => void;
};

export function IconeCategoria({ data, onPress }: IconeCategoriaProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(data)}
      className={`flex h-[122] w-[123] items-center justify-center rounded-3xl bg-[${data.color}]`}
    >
      <Text>{data.name}</Text>
      {/* <Image
        className="h-10 w-10"
        source={{ uri: "https://github.com/Ana.png" }}
      /> */}
    </TouchableOpacity>
  );
}
