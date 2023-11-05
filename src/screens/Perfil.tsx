import { UserContext } from "@contexts/UserContext";
import { Header } from "@layout/Header";
import { Text } from "@ui/Text";
import { Pencil } from "lucide-react-native";
import { useContext } from "react";
import { View, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Perfil() {
  const { handleUserUnlogged } = useContext(UserContext);

  function handleLoggOut() {
    // await logout
    handleUserUnlogged();
  }

  return (
    <SafeAreaView>
      <Header />

      <View className="px-3 pt-9 pb-3">
        <Text className="text-3xl">Perfil do usuário</Text>
      </View>

      <View className="px-7 pt-3">
        <View className="gap-2 pb-6">
          <Text className="text-xl">Nome</Text>
          <View className="flex flex-row gap-4">
            <View className="h-[38] w-[240] rounded-2xl bg-[#B9FFB2]">
              <Text children={undefined}></Text>
            </View>
            <Pressable className="h-[38] w-[38] items-center justify-center rounded-full bg-[#f78d8d]">
              <Pencil />
            </Pressable>
          </View>
        </View>

        <View className="gap-2 pb-6">
          <Text className="text-xl">Email</Text>
          <View className="flex flex-row gap-4">
            <View className="h-[38] w-[240] rounded-2xl bg-[#B9FFB2]">
              <Text children={undefined}></Text>
            </View>
            <Pressable className="h-[38] w-[38] items-center justify-center rounded-full bg-[#f78d8d]">
              <Pencil />
            </Pressable>
          </View>
        </View>

        <View className="gap-2 pb-6 ">
          <Text className="text-xl">Telefone</Text>
          <View className="flex flex-row gap-4">
            <View className="h-[38] w-[240] rounded-2xl bg-[#B9FFB2]">
              <Text children={undefined}></Text>
            </View>
            <Pressable className="h-[38] w-[38] items-center justify-center rounded-full bg-[#f78d8d]">
              <Pencil />
            </Pressable>
          </View>
        </View>

        <View className="gap-2">
          <Text className="text-xl">Senha</Text>
          <View className="flex flex-row gap-4">
            <View className="h-[38] w-[240] rounded-2xl bg-[#B9FFB2]">
              <Text children={undefined}></Text>
            </View>
            <Pressable className="h-[38] w-[38] items-center justify-center rounded-full bg-[#f78d8d]">
              <Pencil />
            </Pressable>
          </View>
        </View>
      </View>

      <View className=" mx-14 p-10">
        <View className="ml-4 flex-row gap-10">
          <Pressable className="h-7 w-20 items-center justify-center rounded-3xl bg-[#52A6E2]">
            <Text>Salvar</Text>
          </Pressable>

          <Pressable
            onPress={handleLoggOut}
            className="h-7 w-20 items-center justify-center rounded-3xl bg-[#52A6E2]"
          >
            <Text>Sair</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
