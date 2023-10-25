import { UserContext } from "@contexts/UserContext";
import { Text } from "@ui/Text";
import { useContext } from "react";
import { View, Pressable } from "react-native";

export function Perfil() {
  const { handleUserUnlogged } = useContext(UserContext);

  function handleLoggOut() {
    // await logout
    handleUserUnlogged();
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable onPress={handleLoggOut}>
        <Text>Sair</Text>
      </Pressable>
    </View>
  );
}
