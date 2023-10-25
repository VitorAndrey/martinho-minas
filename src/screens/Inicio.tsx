import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { AuthNavigationRoutesProps } from "../routes/auth.routes";

const Logo = "../assets/logomt.png";

export function Inicio() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function navegarCadastro() {
    navigation.navigate("Cadastro");
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
        <View className="items-center gap-5">
          <TouchableOpacity className="h-[50px] w-[270px] items-center justify-center  rounded-2xl bg-[#B9FFB2]">
            <Text className="text-base font-semibold">Entrar com Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-[50px]  w-[270px] items-center justify-center  rounded-2xl bg-[#B9FFB2]">
            <Text className="text-base font-semibold">
              Sou cliente MartMais
            </Text>
          </TouchableOpacity>
        </View>

        {/* 👇 Link para a tela de cadastro*/}
        <TouchableOpacity onPress={navegarCadastro}>
          <Text className="pt-6 text-center text-base font-semibold text-[#10C700]">
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

      {/* 👇 Barra verde*/}
      <View className="h-[31] w-full bg-[#10C700]"></View>
    </SafeAreaView>
  );
}
