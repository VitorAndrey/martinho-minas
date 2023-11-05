import { ShoppingListContext } from "@contexts/ShoppingList";
import { useContext } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Cart() {
  const { cartList } = useContext(ShoppingListContext);

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={cartList}
        renderItem={({ item }) => <Text>{item.name_products}</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
