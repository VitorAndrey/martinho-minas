import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { fetchPromotions } from "@services/fetchData";

import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { Product } from "@models/index";
import { Loading } from "@layout/Loading";
import { PromotionItemList } from "@layout/PromotionItemList";
import { generateEmptyItem } from "@utils/emptyItem";

export function Promotions() {
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

      if (data.length % 2 !== 0) {
        data.push(generateEmptyItem());
      }

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

      <Text className="mx-8 mt-8 mb-4 text-xl">Promoções</Text>

      {!isLoadingPromotions ? (
        <FlatList
          data={promotions}
          renderItem={renderPromotion}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            flexGrow: 1,
            justifyContent: "space-around",
            columnGap: 10,
          }}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,

            flexGrow: 1,
          }}
        />
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}
