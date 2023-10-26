import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthNavigationRoutesProps } from "../routes/auth.routes";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { TextBtn } from "@ui/TextBtn";
import { Header } from "@layout/Header";
import { GreenFooter } from "@layout/GreenFooter";

export function Inicio() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function navegarCadastro() {
    navigation.navigate("Cadastro");
  }
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1 justify-center px-12">
        <Text className="mb-10 text-center text-xl font-semibold">
          Faça seu Login!
        </Text>

        <View className="gap-6">
          <Btn>Entrar com Google</Btn>

          <Btn>Sou cliente MartMais</Btn>
        </View>

        <View className="flex-row items-center justify-center gap-2 pt-6">
          <Text>Não tem conta?</Text>

          <TextBtn onPress={navegarCadastro}>Cadastar!</TextBtn>
        </View>
      </View>

      <GreenFooter />
    </SafeAreaView>
  );
}
