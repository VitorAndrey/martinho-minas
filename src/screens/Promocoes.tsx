import { FlatList, View, Image } from "react-native";

import { useQuery } from "@tanstack/react-query";
import { fetchPromotions } from "@services/get";

import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { Product } from "@models/index";
import { useCallback } from "react";
import { PromotionItemList } from "@layout/PromotionItemList";

export function Promocoes() {
  const { data: promotions, isLoading: isLoadingPromotions } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchPromotions,
  });

  const renderPromotion = useCallback(
    ({ item }: { item: Product }) => (
      <PromotionItemList product={item} key={item.id} />
    ),
    [],
  );

  return (
    <SafeAreaView>
      <Header />

      <View>
        <Text className="p-10 px-8 text-3xl font-semibold">Promoções</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={promotions}
        numColumns={2}
        renderItem={renderPromotion}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-around",
          gap: 50,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          gap: 30,
          paddingHorizontal: 30,
          paddingVertical: 5,
          paddingBottom: 190,
        }}
      />
    </SafeAreaView>
  );
}
