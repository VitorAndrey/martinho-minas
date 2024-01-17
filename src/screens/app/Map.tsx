import { RefObject, useCallback, useContext, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { SafeAreaView } from "react-native-safe-area-context";

import { AisleCircle } from "@layout/AisleCircle";
import { Loading } from "@layout/Loading";
import { MapItemList } from "@layout/MapItemList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { AppNavigationRoutesProps } from "@routes/app.routes";
import { Aisle, Product } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";
import { fetchShoppingRoute } from "@services/fetchData";

import { XIcon } from "lucide-react-native";

import colors from "@theme/colors";

export function Map() {
  const [shoppingRoute, setShoppingRoute] = useState<Aisle[]>([]);
  const [isLoadingShoppingRoute, setIsLoadingShoppingRoute] =
    useState<boolean>();

  const modalizeRef: RefObject<Modalize> = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

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

  function handleCurrentList(current: "promotions" | "products") {
    setCurrentList(current);
  }

  const renderProductMapItem = useCallback(
    ({ item }: { item: Product }) => (
      <MapItemList key={item.id} product={item} />
    ),
    [],
  );

  const renderPromotionMapItem = useCallback(
    ({ item }: { item: Product }) => (
      <MapItemList key={item.id} product={item} isPromotional />
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

  function handleUpdateAisle(aisle: number) {
    setCurrentAisle(aisle);
    onOpen();
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
    <SafeAreaView className="flex-1 pb-[100]">
      <View className="-ml-2 -mt-8 px-4 pb-4">
        <TouchableOpacity
          className="h-8 w-8 items-center justify-center"
          onPress={handleNavigateBack}
        >
          <XIcon color={colors["theme-icon"].active} size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {shoppingRoute.map((item, index) => (
          <AisleCircle
            key={item.AisleNumber}
            data={item}
            quantity={item.products.length}
            index={index}
            onPress={() => handleUpdateAisle(item.AisleNumber)}
          />
        ))}
      </ScrollView>

      {/* {!isLoadingShoppingRoute ? (
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
      )} */}

      <Modalize
        avoidKeyboardLikeIOS
        // alwaysOpen={95}
        modalHeight={390}
        handlePosition="inside"
        ref={modalizeRef}
        modalStyle={{
          backgroundColor: colors["theme-gray"][200],
        }}
      >
        <View className="wfull h-full p-4">
          <View className="my-6 h-8 w-36 items-center justify-center rounded-lg border-theme-pink-300 bg-theme-gray-300">
            <Text>Corredor atual: {currentAisle}</Text>
          </View>
          <View className="mb-4 w-full flex-row items-center">
            <TouchableOpacity
              onPress={() => handleCurrentList("products")}
              className={`mr-4 h-10 flex-1 items-center justify-center rounded-lg  ${
                currentList === "products"
                  ? "border border-green-500 bg-theme-green-300"
                  : "bg-theme-gray-50"
              }`}
            >
              <Text>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleCurrentList("promotions")}
              className={`mr-4 h-10 flex-1 items-center justify-center rounded-lg  ${
                currentList === "promotions"
                  ? "border border-green-500 bg-theme-green-300"
                  : "bg-theme-gray-50"
              }`}
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
                  renderItem={renderProductMapItem}
                  contentContainerStyle={{
                    gap: 25,
                    paddingVertical: 10,
                    paddingHorizontal: 8,
                  }}
                />
              ) : (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  initialNumToRender={5}
                  updateCellsBatchingPeriod={1000}
                  data={aisleMap[currentAisle]?.promotions}
                  renderItem={renderPromotionMapItem}
                  contentContainerStyle={{
                    gap: 20,
                    paddingVertical: 10,
                    paddingHorizontal: 8,
                  }}
                />
              )}
            </>
          ) : (
            <Loading />
          )}
        </View>
      </Modalize>
    </SafeAreaView>
  );
}
