import React from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "../routes/auth.routes";
import { Text } from "@ui/Text";
const Logo = "../assets/logomt.png";

export function Cadastro() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function navegarLogin() {
    navigation.navigate("Login");
  }
  return (
    // 👇 Coloca o que tiver dentro em area segura
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 👇 Cabeçalho */}
      <View className="flex-row items-center justify-center gap-1 pt-5">
        {/* 👇 Ícone */}
        <Image style={{ width: 51, height: 51 }} source={require(Logo)} />
        {/* 👇 Título */}
        <Text className="h-20 pt-5 text-2xl font-bold">Martinho de Minas</Text>
      </View>
      {/* 👇 Conteúdo*/}
      <View className="flex-1 items-center justify-center gap-5 bg-slate-50">
        {/* 👇 Nome*/}
        <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2] pr-4">
          <Text className="text-lg font-semibold">Nome:</Text>
          <TextInput className="flex-1 pb-3 text-base " />
        </View>

        {/* 👇 email*/}
        <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2] pr-4">
          <Text className="text-lg font-semibold">Email:</Text>
          <TextInput className="flex-1 pb-3 text-base " />
        </View>

        {/* 👇 Senha*/}
        <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2] pr-4">
          <Text className="text-lg font-semibold">Senha:</Text>
          <TextInput className="flex-1 pb-3 text-base " />
        </View>

        {/* 👇 Confirmar senha*/}
        <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2] pr-4">
          <Text className="text-lg font-semibold">Confirmar senha:</Text>
          <TextInput className="flex-1 pb-3 text-base " />
        </View>

        {/* 👇 Link para a tela de cadastro*/}
        <TouchableOpacity className="p-4" onPress={navegarLogin}>
          <Text className="text-base font-semibold text-[#10C700]">
            Avançar
          </Text>
        </TouchableOpacity>
      </View>

      <View className="h-[31] w-full bg-[#10C700]"></View>
    </SafeAreaView>
  );
}
