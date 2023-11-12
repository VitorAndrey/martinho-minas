import React, { useCallback, useContext, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@layout/Loading";
import { AisleCircle } from "@layout/AisleCircle";
import { AisleSeparator } from "@layout/AisleSeparator";

import { Aisle } from "@models/index";
import { useNavigation } from "@react-navigation/native";

import { fetchShoppingRoute } from "@services/fetchData";

import { X } from "lucide-react-native";

export function Mapa() {
  const [shoppingRoute, setShoppingRoute] = useState();
  const [isLoadingShoppingRoute, setIsLoadingShoppingRoute] =
    useState<boolean>();

  const [currentAisle, setCurrentAisle] = useState<number>();
  const [currentList, setCurrentList] = useState<"products" | "promotions">(
    "products",
  );

  const navigation = useNavigation();
  const { cartList } = useContext(ShoppingListContext);

  // if (isSuccess) {
  //   setCurrentAisle(shoppingRoute[0].aisle);
  // }

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleSetCurrentList() {
    if (currentList === "products") {
      setCurrentList("promotions");
    } else setCurrentList("products");
  }

  // const renderAisleCircle = useCallback(
  //   ({ item }: { item: Aisle }) => <AisleCircle data={item} key={item.id} />,
  //   [],
  // );

  // const renderAisleSeparator = useCallback(
  //   ({ item }: { item: Aisle }) => <AisleSeparator key={item.id} />,
  //   [],
  // );

  // const productList = shoppingRoute?.find((aisle) => (aisle.id = currentAisle));

  return (
    <SafeAreaView className="flex-1">
      <View className="mb-10 px-4 py-2">
        <TouchableOpacity onPress={handleNavigateBack}>
          <X color="black" size={20} />
        </TouchableOpacity>
      </View>

      {!isLoadingShoppingRoute ? (
        <FlatList
          data={shoppingRoute}
          renderItem={({ item }) => (
            <AisleCircle data={item} onPress={() => setCurrentAisle(item.id)} />
          )}
          ItemSeparatorComponent={(item) => <AisleSeparator />}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingVertical: 30,
          }}
        />
      ) : (
        <Loading />
      )}

      <View className="h-52 bg-[#D9D9D9] p-4">
        <View className="m-1 mb-4">
          <Text>Corredor Atual</Text>
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => setCurrentList("products")}
            className="m-2 h-[33] w-[110] items-center justify-center bg-[#FAFAFA]"
          >
            <Text>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentList("promotions")}
            className="m-2 h-[33] w-[110] items-center justify-center bg-[#FAFAFA]"
          >
            <Text>Promoções</Text>
          </TouchableOpacity>
        </View>

        {currentList === "products" ? (
          <Text>Products</Text>
        ) : (
          <Text>Promotions</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
