import { useContext, useState } from "react";

import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Category } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { SearchBar } from "@ui/SearchBar";
import { IconeCategoria } from "@layout/IconeCategoria";
import { ProductItemList } from "@layout/ProductItemList";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts } from "@services/get";

export function Compras() {
  const [filtersList, setFiltersList] = useState<string[]>([]);
  const { cartList, addProduct, removeProduct } =
    useContext(ShoppingListContext);

  const {
    data: categories,
    refetch: refetchCategories,
    isLoading: isLoadingCateories,
  } = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

  const {
    data: products,
    refetch: refetchProducts,
    isLoading: isLoadingProducts,
  } = useQuery({
    queryKey: ["products", filtersList],
    queryFn: () => fetchProducts(filtersList),
  });

  function handleUpdateFiltersList(category: Category) {
    const filteredList = [...filtersList];
    const matches = filtersList.includes(category.id);

    if (matches) {
      const index = filteredList.indexOf(category.id);
      if (index !== -1) {
        filteredList.splice(index, 1);
      }
    } else {
      filteredList.push(category.id);
    }

    setFiltersList(filteredList);
  }

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1">
        <SearchBar className="my-4 px-8" />

        <View className="mb-4 gap-2">
          <Text className="px-8">Filtrar</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <IconeCategoria
                data={item}
                onPress={(item) => handleUpdateFiltersList(item)}
                active={filtersList.includes(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 10, paddingHorizontal: 30 }}
          />
        </View>

        <View className="flex-1 gap-4 px-8">
          <Text>Adicione Produtos</Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => <ProductItemList product={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              gap: 10,
            }}
          />
        </View>
      </View>

      <Btn className="my-4 mx-8">Ver carrinho</Btn>
    </SafeAreaView>
  );
}
