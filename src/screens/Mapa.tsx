import { ShoppingListContext } from "@contexts/ShoppingList";
import { useNavigation } from "@react-navigation/native";
import { fetchShoppingRoute } from "@services/fetchData";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react-native";
import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Mapa() {
  const { cartList } = useContext(ShoppingListContext);

  const navigation = useNavigation();

  const { data: shoppingRoute, isLoading: isLoadingShoppingRoute } = useQuery({
    queryKey: ["shoppingRoute"],
    queryFn: () => fetchShoppingRoute(cartList),
  });

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-2">
        <TouchableOpacity onPress={handleNavigateBack}>
          <X color="black" size={20} />
        </TouchableOpacity>
      </View>

      <View>
        <Text>hio</Text>
      </View>
    </SafeAreaView>
  );
}
