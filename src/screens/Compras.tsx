import { IconeCategoria } from "@layout/IconeCategoria";
import { MoveRight, Search } from "lucide-react-native";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";

const Logo = "../assets/logomt.png";

export function Compras() {
  const categories = [
    {
      id: "1",
      name: "açougue",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "2",
      name: "basicos",
      url: "https://github.com/marcella.png",
      cor: "#",
    },

    {
      id: "3",
      name: "bebidas",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "4",
      name: "biscoitos",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "5",
      name: "cabelo",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "6",
      name: "churrasco",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "7",
      name: "enlatados",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "8",
      name: "farinhas",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "9",
      name: "frios e congelados",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "10",
      name: "guloseimas",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "11",
      name: "hortifruti",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "12",
      name: "gerais",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "13",
      name: "leites",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "14",
      name: "limpeza bucal",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "15",
      name: "Limpeza Casa",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "16",
      name: "Limpeza Corporal",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "17",
      name: "Limpeza Roupas",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "18",
      name: "Massas",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "19",
      name: "Material escolar",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "20",
      name: "Molhos",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "21",
      name: "Óleos",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "22",
      name: "Padaria",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "23",
      name: "Pet Shop",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
    {
      id: "24",
      name: ".",
      url: "https://github.com/marcella.png",
      cor: "#",
    },
  ];

  return (
    // 👇 Coloca o que tiver dentro em area segura
    <SafeAreaView className="flex-1">
      {/* 👇 Cabeçalho + Pesquisa*/}
      <View className="pl-12">
        {/* 👇 Cabeçalho */}
        <View className="flex-row items-center justify-start gap-1 pt-5">
          {/* 👇 Ícone */}
          <Image style={{ width: 51, height: 51 }} source={require(Logo)} />
          {/* 👇 Título */}
          <Text className="h-20 pt-5 text-2xl font-semibold">
            Martinho de Minas
          </Text>
        </View>
        {/* 👇 Pesquisa */}
        <View className=" flex-row  gap-7">
          <View
            className="h-[56] w-[57] rounded-full bg-[#FF9C9C]"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* 👇 Ícone pesquisa */}
            <Search color="black" />
          </View>
          {/* 👇 Input pesquisa */}
          <View className="h-[56] w-[216] rounded-full bg-[#B9FFB2]">
            <TextInput className="w-[225] items-center justify-center p-5 pb-3 text-base" />
          </View>
        </View>
      </View>
      {/* 👇 Categorias */}
      <View>
        <View>
          <Text className="p-9 pl-10 pt-5 text-3xl font-semibold">
            Categorias
          </Text>
        </View>
      </View>
      {/* 👇 Blocos categorias */}
      <View className="flex-row">
        {/* 👇 Hortifruti*/}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => <IconeCategoria data={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 25, paddingHorizontal: 25 }}
        />
      </View>

      <View className="items-end p-3">
        <TouchableOpacity>
          <MoveRight color="black" />
        </TouchableOpacity>
      </View>

      {/* 👇 Lista */}
      <View>
        <View>
          <Text className="p-9 pl-10 pt-5 text-3xl font-semibold">Lista</Text>
        </View>
      </View>

      <View></View>

      {/* 👇 Menu verde*/}
    </SafeAreaView>
  );
}
