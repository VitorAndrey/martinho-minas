import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@layout/Header";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui/Button";
import { Text } from "@ui/Text";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

export function Welcome() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function navegarRegister() {
    navigation.navigate("Register");
  }

  function handleNavigateLogin() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView className="flex-1 bg-theme-bg-100">
      <Header />

      <View className="flex-1 justify-center px-12">
        <Text className="mb-10 text-center text-xl font-semibold">
          Seja bem vindo!
        </Text>

        <View className="gap-6">
          {/* <Button>Entrar com Google</Button> */}

          <Button onPress={handleNavigateLogin}>Sou cliente MartMais</Button>
        </View>

        <View className="flex-row items-center justify-center gap-2 pt-10">
          <Text>Não tem conta?</Text>

          <TouchableOpacity onPress={navegarRegister}>
            <Text className="font-poppins-600 text-theme-green-500">
              Cadastar!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
