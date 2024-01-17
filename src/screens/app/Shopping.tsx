import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CategoryItemList } from "@layout/CategoryItemList";
import { Header } from "@layout/Header";
import { Loading } from "@layout/Loading";
import { ProductItemList } from "@layout/ProductItemList";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { Text } from "@ui/Text";

import { AppNavigationRoutesProps } from "@routes/app.routes";
import { Category, Product } from "@models/index";
import { fetchCategories, fetchProducts } from "@services/fetchData";

import { SearchIcon } from "lucide-react-native";

import colors from "@theme/colors";

export function Shopping() {
  const [categories, setCategories] = useState<Category[]>();
  const [isLoadingCategories, setIsLoadingCategories] =
    useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>();
  const [filterdBySearchProducts, setFilteredBySearchProducts] = useState<
    Product[] | null
  >();
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false);

  const [filter, setFilter] = useState<string | null>(null);

  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleUpdatefilter(id: string) {
    setFilter((prev) => {
      if (!prev) return id;
      else return null;
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
        filter={filter}
        onPress={() => handleUpdatefilter(item.id)}
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
      const filters = filter ? [filter] : [];
      const data = await fetchProducts(filters);
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
  }, [filter]);

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1">
        <View className="py-4 px-8">
          <Input
            inputProps={{
              value: searchInputValue,
              onChangeText: setSearchInputValue,
              inputClass: "z-50 pl-8",
            }}
            containerProps={{
              containerClass: "rounded-full",
            }}
            icon={() => (
              <SearchIcon
                className="absolute left-4 z-0"
                color={colors["theme-icon"].active}
                size={18}
              />
            )}
          />
        </View>

        <View className="mb-4 gap-2 py-2">
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
