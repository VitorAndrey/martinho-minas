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
    <View className="flex-1 bg-theme-gray-100">
      <SafeAreaView className="flex-1">
        <View className="py-4 px-4">
          <TouchableOpacity onPress={handleNavigateBack}>
            <XIcon color={colors["theme-icon"].active} size={20} />
          </TouchableOpacity>
        </View>

        {!isLoadingShoppingRoute ? (
          <FlatList
            data={shoppingRoute}
            renderItem={({ item, index }) => (
              <AisleCircle
                data={item}
                quantity={item.products.length}
                index={index}
                onPress={() => setCurrentAisle(item.AisleNumber)}
              />
            )}
            contentContainerStyle={{
              flexGrow: 1,
              paddingVertical: 30,
              gap: 20,
            }}
          />
        ) : (
          <Loading />
        )}

        <View className="h-[40%] w-full bg-white p-4">
          <Text className="mb-4">{currentAisle}</Text>
          <View className="mb-4 w-full flex-row">
            <TouchableOpacity
              onPress={() => setCurrentList("products")}
              className="mr-4 h-10 flex-1 items-center justify-center rounded-lg bg-theme-gray-100"
            >
              <Text>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setCurrentList("promotions")}
              className="h-10 flex-1 items-center justify-center rounded-lg bg-theme-gray-100"
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
    </View>
  );
}
