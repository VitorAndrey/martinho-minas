import { FlatList } from "react-native";
import { useCallback, useContext } from "react";

import { Product } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import { SafeAreaView } from "react-native-safe-area-context";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { CartItemList } from "@layout/CartItemList";

export function Cart() {
  const { cartList } = useContext(ShoppingListContext);
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleNavigateToMap() {
    navigation.navigate("Cart");
  }

  const renderCartItem = useCallback(
    ({ item }: { item: Product }) => (
      <CartItemList product={item} key={item.id} />
    ),
    [],
  );

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <Text className="mx-8 my-8">Seu carrinho</Text>

      <FlatList
        data={cartList}
        renderItem={renderCartItem}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 30,
          paddingVertical: 20,

          flexGrow: 1,
        }}
      />

      <Btn
        className="my-4 mx-8 bg-theme-pink-300"
        onPress={handleNavigateToMap}
      >
        Concluir
      </Btn>
    </SafeAreaView>
  );
}
