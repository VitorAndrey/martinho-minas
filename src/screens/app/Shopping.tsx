import { useCallback, useEffect, useState } from "react";

import { View, FlatList, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Category, Product } from "@models/index";

import colors from "@theme/colors";
import { Search } from "lucide-react-native";

import { fetchCategories, fetchProducts } from "@services/fetchData";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import { Text } from "@ui/Text";
import { Button } from "@ui/Button";
import { Header } from "@layout/Header";
import { Loading } from "@layout/Loading";
import { ProductItemList } from "@layout/ProductItemList";
import { CategoryItemList } from "@layout/CategoryItemList";

export function Shopping() {
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

  function handleUpdateFiltersList(id: string) {
    setFiltersList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((filterId) => filterId !== id);
      } else {
        return [...prev, id];
      }
    });
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
      <CategoryItemList
        key={item.id}
        category={item}
        onPress={() => handleUpdateFiltersList(item.id)}
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
      const data = await fetchProducts(filtersList);
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
            <Search color={colors["theme-icon"].active} size={16} />
          </TouchableOpacity>

          <TextInput
            value={searchInputValue}
            onChangeText={setSearchInputValue}
            className="h-12 flex-1 rounded-full bg-theme-green-300 px-6 text-base"
          />
        </View>

        <View className="mb-4 h-20 gap-2">
          <Text className="px-8">Filtrar</Text>
          {!isLoadingCategories ? (
            <FlatList
              className="min-h-10"
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

        <View className="flex-1 gap-2">
          <Text className="px-8">Adicione Produtos</Text>

          {!isLoadingProducts ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              initialNumToRender={7}
              data={filterdBySearchProducts}
              renderItem={renderProduct}
              contentContainerStyle={{
                gap: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
                paddingBottom: 20,

                flexGrow: 1,
              }}
            />
          ) : (
            <Loading />
          )}
        </View>
      </View>

      <Button className="my-2 mx-8" onPress={handleNavigateToCart}>
        Ver carrinho
      </Button>
    </SafeAreaView>
  );
}
