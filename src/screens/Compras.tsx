import { useCallback, useEffect, useState } from "react";

import { View, FlatList, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Category, Product } from "@models/index";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { IconeCategoria } from "@layout/IconeCategoria";
import { ProductItemList } from "@layout/ProductItemList";

import { Loading } from "@layout/Loading";
import { fetchCategories, fetchProducts } from "@services/fetchData";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { Search } from "lucide-react-native";

export function Compras() {
  const [categories, setCategories] = useState<Category[]>();
  const [isLoadingCategories, setIsLoadingCategories] =
    useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>();
  const [filterdBySearchProducts, setFilteredBySearchProducts] = useState<
    Product[] | null
  >();
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false);

  const [filtersList, setFiltersList] = useState<string[]>([]);

  const [searchInputValue, setSearchInputValue] = useState<string>("");

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

  async function handleFetchCategories() {
    setIsLoadingCategories(true);

    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingCategories(false);
    }
  }

  async function handleFetchProducts() {
    setIsLoadingProducts(true);

    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingProducts(false);
    }
  }

  function handleUpdateFilteredProducts() {
    const filteredList = products?.filter((product) =>
      product.name.toLowerCase().includes(searchInputValue.toLowerCase()),
    );

    setFilteredBySearchProducts(filteredList);
  }

  useEffect(() => {
    handleUpdateFilteredProducts();
  }, [searchInputValue, products]);

  useEffect(() => {
    handleFetchCategories();
  }, []);

  useEffect(() => {
    handleFetchProducts();
  }, [filtersList]);

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1">
        <View className="flex-row gap-2 py-4 px-8">
          <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-full bg-theme-pink-300">
            <Search color="black" size={16} />
          </TouchableOpacity>

          <TextInput
            value={searchInputValue}
            onChangeText={setSearchInputValue}
            className="h-12 flex-1 rounded-full bg-theme-green-300 px-5 text-base"
          />
        </View>

        <View className="mb-4 gap-2">
          <Text className="px-8">Filtrar</Text>
          {!isLoadingCategories ? (
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
              data={filterdBySearchProducts}
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
