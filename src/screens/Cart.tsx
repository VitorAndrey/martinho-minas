import { ShoppingListContext } from "@contexts/ShoppingList";
import { Header } from "@layout/Header";
import { Text } from "@ui/Text";
import { useContext } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { v4 as uuidv4 } from "uuid";

export function Cart() {
  const { cartList } = useContext(ShoppingListContext);

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <Text className="mx-8 my-8">Seu carrinho</Text>

      <FlatList
        data={cartList}
        renderItem={({ item }) => <Text>{item.name_products}</Text>}
        keyExtractor={() => uuidv4()}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 30,
          paddingVertical: 20,

          flexGrow: 1,
        }}
      />
    </SafeAreaView>
  );
}
