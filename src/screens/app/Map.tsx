import { useCallback, useContext, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Alert } from "react-native";

import { ShoppingListContext } from "@contexts/ShoppingList";
import { SafeAreaView } from "react-native-safe-area-context";

import { Aisle, Product } from "@models/index";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { fetchShoppingRoute } from "@services/fetchData";

import colors from "@theme/colors";

import { XIcon } from "lucide-react-native";
import { MapItemList } from "@layout/MapItemList";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import { Loading } from "@layout/Loading";
import { AisleCircle } from "@layout/AisleCircle";
import { AisleSeparator } from "@layout/AisleSeparator";

export function Map() {
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

  function handleNavigateToShopping() {
    navigation.navigate("Shopping");
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
      setShoppingRoute([]);

      if (cartList.length > 0) {
        handleFetchShoppingRoute();
      } else {
        Alert.alert(
          "Carrinho vazio",
          "Não é possivel buscar a rota de Shopping com o carrinho vazio.",
          [{ text: "Comprar", onPress: () => handleNavigateToShopping() }],
        );
      }
    }, [cartList]),
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="mb-10 px-4 py-2">
        <TouchableOpacity onPress={handleNavigateBack}>
          <XIcon color={colors["theme-icon"].active} size={20} />
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

      <View className="bg-theme-gray-300 h-[30%] p-4">
        <Text>{currentAisle}</Text>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => setCurrentList("products")}
            className="bg-theme-gray-100 m-2 h-10 w-40 items-center justify-center rounded-lg"
          >
            <Text>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentList("promotions")}
            className="bg-theme-gray-100 m-2 h-10 w-40 items-center justify-center rounded-lg"
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
