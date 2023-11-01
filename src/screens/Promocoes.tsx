import { Text } from "@ui/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@layout/Header";
import { FlatList, View, Image, ScrollView } from "react-native";

export function Promocoes() {
  const produtos = [
    {
      id: "1",
      name: "Batata",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },
    {
      id: "2",
      name: "Maca",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },
    {
      id: "3",
      name: "Pera",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },
    {
      id: "4",
      name: "Morango",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },

    {
      id: "5",
      name: "Marshmallow",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },

    {
      id: "6",
      name: "Jujuba",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },

    {
      id: "7",
      name: "Caju",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },

    {
      id: "8",
      name: "Beterraba",
      imageUrl: "https://github.com/ana",
      price: 99.99,
      discountPercentage: 5,
    },
  ];
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text className="p-10 px-8 text-3xl font-semibold">Promoções</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={produtos}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="flex-1 columns-1">
            <View className="w-[123]; h-[124] rounded-3xl bg-[#B9FFB2]">
              <Image source={{ uri: item.imageUrl }} />
            </View>
            <View className="items-center">
              <Text className="p-2">{item.name}</Text>
              <Text>{item.price}</Text>
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
