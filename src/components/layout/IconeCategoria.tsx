import { Text } from "@ui/Text";
import { View } from "react-native";

type IconeCategoriaProps = {
  data: {
    id: string;
    name: string;
  };
};

export function IconeCategoria({ data }: IconeCategoriaProps) {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
