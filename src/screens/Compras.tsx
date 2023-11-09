import { useCallback, useEffect, useState } from "react";

import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Category, Product } from "@models/index";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { SearchBar } from "@ui/SearchBar";
import { IconeCategoria } from "@layout/IconeCategoria";
import { ProductItemList } from "@layout/ProductItemList";

import { Loading } from "@layout/Loading";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts } from "@services/fetchData";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

export function Compras() {
  const [filtersList, setFiltersList] = useState<string[]>([]);

  const { data: categories, isLoading: isLoadingCateories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products", filtersList],
    queryFn: () => fetchProducts(filtersList),
  });

  const navigation = useNavigation<AppNavigationRoutesProps>();

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

  function handleNavigateToCart() {
    navigation.navigate("Cart");
  }

  const renderProduct = useCallback(
    ({ item }: { item: Product }) => (
      <ProductItemList product={item} key={item.id} />
    ),
    [],
  );

  const renderCategory = useCallback(
    ({ item }: { item: Category }) => (
      <IconeCategoria
        key={item.id}
        category={item}
        onPress={() => handleUpdateFiltersList(item)}
        active={filtersList.includes(item.id)}
      />
    ),
    [],
  );

  useEffect(() => {
    console.log(categories, products);
  }, [categories, products]);

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1">
        <SearchBar className="my-4 px-8" />

        <View className="mb-4 gap-2">
          <Text className="px-8">Filtrar</Text>
          {!isLoadingCateories ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              initialNumToRender={5}
              updateCellsBatchingPeriod={1000}
              data={categories}
              renderItem={renderCategory}
              contentContainerStyle={{
                gap: 10,
                paddingHorizontal: 30,
              }}
            />
          ) : (
            <Loading />
          )}
        </View>

        <View className="flex-1 gap-4 px-8">
          <Text>Adicione Produtos</Text>

          {!isLoadingProducts ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              initialNumToRender={7}
              data={products}
              renderItem={renderProduct}
              contentContainerStyle={{
                flexGrow: 1,
                gap: 10,
              }}
            />
          ) : (
            <Loading />
          )}
        </View>
      </View>

      <Btn className="my-4 mx-8" onPress={handleNavigateToCart}>
        Ver carrinho
      </Btn>
    </SafeAreaView>
  );
}
