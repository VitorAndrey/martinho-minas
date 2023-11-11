import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { fetchPromotions } from "@services/fetchData";

import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { Product } from "@models/index";
import { Loading } from "@layout/Loading";
import { PromotionItemList } from "@layout/PromotionItemList";

export function Promocoes() {
  const [promotions, setPromotions] = useState<Product[]>();
  const [isLoadingPromotions, setIsLoadingPromotions] =
    useState<boolean>(false);

  const renderPromotion = useCallback(
    ({ item }: { item: Product }) => (
      <PromotionItemList product={item} key={item.id} />
    ),
    [],
  );

  async function handleFetchPromotions() {
    setIsLoadingPromotions(true);

    try {
      const data = await fetchPromotions();
      setPromotions(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingPromotions(false);
    }
  }

  useEffect(() => {
    handleFetchPromotions();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="px-6 py-4">
        <Text className="text-xl font-semibold">Promoções</Text>
      </View>

      {!isLoadingPromotions ? (
        <FlatList
          data={promotions}
          renderItem={renderPromotion}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            flexGrow: 1,
            justifyContent: "space-around",
            columnGap: 20,
          }}
          contentContainerStyle={{
            flexGrow: 1,
            gap: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        />
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}
