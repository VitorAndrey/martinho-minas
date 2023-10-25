import { UserContext } from "@contexts/UserContext";
import { useContext } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Logo = "../assets/logomt.png";

export function Login() {
  const { handleUserLogged } = useContext(UserContext);

  function handleUserLogin() {
    // await login

    handleUserLogged();
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

      {/* 👇 Conteúdo */}
      <View className="flex-1 items-center justify-center gap-6">
        {/* 👇 Texto de login */}
        <Text className="text-xl font-semibold">Faça seu Login!</Text>

        {/* 👇 Container de botões */}
        {/* 👇 email*/}
        <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2]">
          <Text className="text-lg font-semibold">Email:</Text>
          <TextInput className="w-[190] pb-3 text-base" />
        </View>

        {/* 👇 Senha*/}
        <View className="h-[54] w-[280] flex-row gap-3 rounded-2xl bg-[#B9FFB2]">
          <Text className="text-lg font-semibold">Senha:</Text>
          <TextInput className="w-[190] pb-3 text-base" />
        </View>

        {/* 👇 Link para a tela de cadastro*/}
        <TouchableOpacity onPress={handleUserLogin}>
          <Text className="justify-center pt-6 text-center text-base font-semibold text-[#10C700]">
            Avançar
          </Text>
        </TouchableOpacity>
      </View>

      {/* 👇 Barra verde*/}
      <View className="h-[31] w-full bg-[#10C700]"></View>
    </SafeAreaView>
  );
}
