import { ScrollView, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthNavigationRoutesProps } from "../routes/auth.routes";

import { Text } from "@ui/Text";
import { Input } from "@ui/Input";
import { TextBtn } from "@ui/TextBtn";
import { Header } from "@layout/Header";
import { GreenFooter } from "@layout/GreenFooter";

export function Cadastro() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function navegarLogin() {
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center gap-5 p-10">
          <Text className="mb-10 text-center text-xl font-semibold">
            Crie sua conta!
          </Text>

          <Input label="Nome:" />

          <Input label="Email:" />

          <Input label="Senha:" />

          <Input label="Confirmar Senha:" />

          <TextBtn onPress={navegarLogin}>Avançar</TextBtn>
        </View>

        <GreenFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
