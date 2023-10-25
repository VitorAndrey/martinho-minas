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

import { useContext, useState } from "react";

import { Text } from "@ui/Text";
import { ShoppingListContext } from "@contexts/ShoppingList";

const Logo = "../assets/logomt.png";

export function Compras() {
  const { cartList, addCartItem, removeCartItem } =
    useContext(ShoppingListContext);

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
