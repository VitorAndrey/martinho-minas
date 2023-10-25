import { Text } from "@ui/Text";
import { View } from "react-native";

type IconeCategoriaProps = {
  data: {
    id: string;
    name: string;
    url: string;
    cor: string;
  };
};

export function IconeCategoria({ data }: IconeCategoriaProps) {
  return (
    <View
      className={`flex h-[122] w-[123] items-center justify-center rounded-3xl bg-[${data.cor}]`}
    >
      <Text>{data.name}</Text>
      <Text>{data.url}</Text>
    </View>
  );
}
