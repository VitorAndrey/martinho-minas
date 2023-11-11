import { View, Text } from "react-native";

export function EmptyCart() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-zinc-500">O carrinho está vazio.</Text>
      <Text className="text-zinc-500">Adicione items para iniciar.</Text>
    </View>
  );
}
