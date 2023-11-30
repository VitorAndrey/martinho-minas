import { Alert, FlatList, View } from "react-native";
import { useCallback, useContext } from "react";

import { Product } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import { SafeAreaView } from "react-native-safe-area-context";

import colors from "@theme/colors";

import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { CartItemList } from "@layout/CartItemList";
import { EmptyCart } from "@layout/EmptyCart";
import { BadgeCheckIcon, BadgeMinusIcon } from "lucide-react-native";

export function Cart() {
  const { cartList, clearCart } = useContext(ShoppingListContext);
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleNavigateToMap() {
    navigation.navigate("Map");
  }

  function handleClearCartList() {
    Alert.alert(
      "Deletar",
      "Você deseja excluir todos os item da sua lista de compras?",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Sim", onPress: () => clearCart() },
      ],
    );
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

      <Text className="mx-8 mt-8 mb-4 text-xl">Seu carrinho</Text>

      <FlatList
        data={cartList}
        renderItem={renderCartItem}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 30,
          paddingVertical: 10,

          flexGrow: 1,
        }}
        ListEmptyComponent={() => <EmptyCart />}
      />

      <View className="flex-row py-4 px-8">
        <Button
          className={`mr-4 flex-1 ${
            cartList.length < 1 ? "bg-theme-gray-200" : "bg-theme-green-300"
          }`}
          onPress={handleNavigateToMap}
          disabled={cartList.length < 1}
          icon={() => (
            <BadgeCheckIcon
              color={colors["theme-icon"].active}
              className="ml-2"
              size={18}
            />
          )}
        >
          Gerar rota
        </Button>
        <Button
          className={`flex-1 ${
            cartList.length < 1 ? "bg-theme-gray-200" : "bg-theme-pink-300"
          }`}
          onPress={handleClearCartList}
          disabled={cartList.length < 1}
          icon={() => (
            <BadgeMinusIcon
              color={colors["theme-icon"].active}
              className="ml-2"
              size={18}
            />
          )}
        >
          Limpar
        </Button>
      </View>
    </SafeAreaView>
  );
}
