import { CategoryType } from "@layout/IconeCategoria";
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

import { useState } from "react";

import { Text } from "@ui/Text";

const Logo = "../assets/logomt.png";

export function Compras() {
  const [cart, setCart] = useState<CategoryType[]>([]);

  function addCategory(category: CategoryType) {
    console.log(category);

    setCart((prevState) => {
      return {
        ...prevState,
        category,
      };
    });
  }

  const categories = [
    {
      id: "1",
      name: "açougue",
      url: "https://cdn-icons-png.flaticon.com/128/1134/1134447.png",
      cor: "#CB4646",
    },
    {
      id: "2",
      name: "basicos",
      url: "https://github.com/marcella.png",
      cor: "#B0FCFF",
    },

    {
      id: "3",
      name: "bebidas",
      url: "https://github.com/marcella.png",
      cor: "#AC6FBD",
    },
    {
      id: "4",
      name: "biscoitos",
      url: "https://github.com/marcella.png",
      cor: "##C8703A",
    },
    {
      id: "5",
      name: "cabelo",
      url: "https://github.com/marcella.png",
      cor: "#D4C178",
    },
    {
      id: "6",
      name: "churrasco",
      url: "https://github.com/marcella.png",
      cor: "#EB8080",
    },
    {
      id: "7",
      name: "enlatados",
      url: "https://github.com/marcella.png",
      cor: "#C8C8C8",
    },
    {
      id: "8",
      name: "farinhas",
      url: "https://github.com/marcella.png",
      cor: "#E6C38E",
    },
    {
      id: "9",
      name: "frios e congelados",
      url: "https://github.com/marcella.png",
      cor: "#9EDBFF",
    },
    {
      id: "10",
      name: "guloseimas",
      url: "https://github.com/marcella.png",
      cor: "#FF92D5",
    },
    {
      id: "11",
      name: "hortifruti",
      url: "https://github.com/marcella.png",
      cor: "#7AAD64",
    },
    {
      id: "12",
      name: "gerais",
      url: "https://github.com/marcella.png",
      cor: "#DDDDDD",
    },
    {
      id: "13",
      name: "leites",
      url: "https://github.com/marcella.png",
      cor: "#FFEED3",
    },
    {
      id: "14",
      name: "limpeza bucal",
      url: "https://github.com/marcella.png",
      cor: "#C3E5E6",
    },
    {
      id: "15",
      name: "Limpeza Casa",
      url: "https://github.com/marcella.png",
      cor: "#A374FF",
    },
    {
      id: "16",
      name: "Limpeza Corporal",
      url: "https://github.com/marcella.png",
      cor: "#EDE6E0",
    },
    {
      id: "17",
      name: "Limpeza Roupas",
      url: "https://github.com/marcella.png",
      cor: "#3064A8",
    },
    {
      id: "18",
      name: "Massas",
      url: "https://github.com/marcella.png",
      cor: "#FFDA92",
    },
    {
      id: "19",
      name: "Material escolar",
      url: "https://github.com/marcella.png",
      cor: "#D6FFA1",
    },
    {
      id: "20",
      name: "Molhos",
      url: "https://github.com/marcella.png",
      cor: "#793434",
    },
    {
      id: "21",
      name: "Óleos",
      url: "https://github.com/marcella.png",
      cor: "#FFF2C0",
    },
    {
      id: "22",
      name: "Padaria",
      url: "https://github.com/marcella.png",
      cor: "#D1773E",
    },
    {
      id: "23",
      name: "Pet Shop",
      url: "https://github.com/marcella.png",
      cor: "#FFC700",
    },
    {
      id: "24",
      name: "Pós",
      url: "https://github.com/marcella.png",
      cor: "#803D15",
    },
    {
      id: "25",
      name: "Salgadinhos",
      url: "https://github.com/marcella.png",
      cor: "#E15600",
    },
    {
      id: "26",
      name: "Temperos",
      url: "https://github.com/marcella.png",
      cor: "#2f895e",
    },
    {
      id: "27",
      name: "Veículos",
      url: "https://github.com/marcella.png",
      cor: "#FF9C9C",
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
          renderItem={({ item }) => (
            <IconeCategoria data={item} onAddCategory={addCategory} />
          )}
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

      <FlatList
        data={cart}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />

      {/* 👇 Menu verde*/}
    </SafeAreaView>
  );
}
