import React, { useCallback, useContext, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Alert } from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@layout/Loading";
import { AisleCircle } from "@layout/AisleCircle";
import { AisleSeparator } from "@layout/AisleSeparator";

import { Aisle, Product } from "@models/index";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { fetchShoppingRoute } from "@services/fetchData";

import { X } from "lucide-react-native";
import { MapItemList } from "@layout/MapItemList";
import { AppNavigationRoutesProps } from "@routes/app.routes";

export function Mapa() {
  const [shoppingRoute, setShoppingRoute] = useState<Aisle[]>([]);
  const [isLoadingShoppingRoute, setIsLoadingShoppingRoute] =
    useState<boolean>();

  const [aisleMap, setAisleMap] = useState<Record<number, Aisle>>({});

  const [currentAisle, setCurrentAisle] = useState<number>(0);
  const [currentList, setCurrentList] = useState<"products" | "promotions">(
    "products",
  );

  const navigation = useNavigation<AppNavigationRoutesProps>();
  const { cartList } = useContext(ShoppingListContext);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToCompras() {
    navigation.navigate("Compras");
  }

  const renderMapItem = useCallback(
    ({ item }: { item: Product }) => (
      <MapItemList key={item.id} product={item} />
    ),
    [],
  );

  async function handleFetchShoppingRoute() {
    setIsLoadingShoppingRoute(true);

    try {
      const shoppingRoute = await fetchShoppingRoute(cartList);

      if (shoppingRoute) {
        setShoppingRoute(shoppingRoute);
        setCurrentAisle(shoppingRoute[0].AisleNumber);

        const aisleMap = shoppingRoute.reduce<Record<number, Aisle>>(
          (map, aisle) => {
            map[aisle.AisleNumber] = aisle;
            return map;
          },
          {},
        );
        setAisleMap(aisleMap);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingShoppingRoute(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (cartList.length > 0) {
        handleFetchShoppingRoute();
      } else {
        Alert.alert(
          "Carrinho vazio",
          "Não é possivel buscar a rota de compras com o carrinho vazio.",
          [{ text: "Comprar", onPress: () => handleNavigateToCompras() }],
        );
      }
    }, [cartList]),
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
            <AisleCircle
              data={item}
              onPress={() => setCurrentAisle(item.AisleNumber)}
            />
          )}
          ItemSeparatorComponent={(item) => <AisleSeparator />}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 30,
          }}
        />
      ) : (
        <Loading />
      )}

      <View className="h-[30%] bg-[#D9D9D9] p-4">
        <Text>{currentAisle}</Text>
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

        {!isLoadingShoppingRoute ? (
          <>
            {currentList === "products" ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                initialNumToRender={5}
                updateCellsBatchingPeriod={1000}
                data={aisleMap[currentAisle]?.products}
                renderItem={renderMapItem}
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 30,
                }}
              />
            ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                initialNumToRender={5}
                updateCellsBatchingPeriod={1000}
                data={aisleMap[currentAisle]?.promotions}
                renderItem={renderMapItem}
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 30,
                }}
              />
            )}
          </>
        ) : (
          <Loading />
        )}
      </View>
    </SafeAreaView>
  );
}
