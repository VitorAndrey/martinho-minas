import React, { useCallback, useContext, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@layout/Loading";
import { AisleCircle } from "@layout/AisleCircle";
import { AisleSeparator } from "@layout/AisleSeparator";

import { Aisle, Product } from "@models/index";
import { useNavigation } from "@react-navigation/native";

import { fetchShoppingRoute } from "@services/fetchData";

import { X } from "lucide-react-native";
import { MapItemList } from "@layout/MapItemList";

export function Mapa() {
  const [shoppingRoute, setShoppingRoute] = useState();
  const [isLoadingShoppingRoute, setIsLoadingShoppingRoute] =
    useState<boolean>();

  const [currentAisle, setCurrentAisle] = useState<number>();
  const [currentList, setCurrentList] = useState<"products" | "promotions">(
    "products",
  );

  const promotions: Product[] = [];
  const products: Product[] = [];

  const navigation = useNavigation();
  const { cartList } = useContext(ShoppingListContext);

  function handleNavigateBack() {
    navigation.goBack();
  }

  const renderMapItem = useCallback(
    ({ item }: { item: Product }) => (
      <MapItemList key={item.id} product={item} />
    ),
    [],
  );

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

      <View className="h-[30%] bg-[#D9D9D9] p-4">
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => setCurrentList("products")}
            className="m-2 h-[33] w-[110] items-center justify-center rounded-lg bg-[#FAFAFA]"
          >
            <Text>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentList("promotions")}
            className="m-2 h-[33] w-[110] items-center justify-center rounded-lg bg-[#FAFAFA]"
          >
            <Text>Promoções</Text>
          </TouchableOpacity>
        </View>

        {currentList === "products" ? (
          <FlatList
            className="min-h-10"
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            updateCellsBatchingPeriod={1000}
            data={products}
            renderItem={renderMapItem}
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 30,
            }}
          />
        ) : (
          <FlatList
            className="min-h-10"
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={5}
            updateCellsBatchingPeriod={1000}
            data={promotions}
            renderItem={renderMapItem}
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 30,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
