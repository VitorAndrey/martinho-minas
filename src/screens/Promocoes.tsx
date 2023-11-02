import { FlatList, View, Image } from "react-native";

import { useQuery } from "@tanstack/react-query";
import { fetchPromotions } from "@services/get";

import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Header } from "@layout/Header";

export function Promocoes() {
  const { data: promotions, isLoading: isLoadingPromotions } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchPromotions,
  });

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
        renderItem={({ item }) => (
          <View className="flex-1 columns-1">
            <View className="w-[123]; h-[124] rounded-3xl bg-[#B9FFB2]">
              <Image source={{ uri: item.imageUrl }} />
            </View>
            <View className="items-center">
              <Text className="p-2">{item.name}</Text>
              <Text>{item.basePrice}</Text>
            </View>
          </View>
        )}
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
