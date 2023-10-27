import { useContext, useEffect, useState } from "react";

import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Category, Product } from "@models/index";
import { ShoppingListContext } from "@contexts/ShoppingList";
import { fetchCategories, fetchProducts } from "@services/get";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { SearchBar } from "@ui/SearchBar";
import { IconeCategoria } from "@layout/IconeCategoria";
import { ProductItemList } from "@layout/ProductItemList";

export function Compras() {
  const [categories, setCategories] = useState<Category[]>();
  const [products, setProducts] = useState<Product[]>();
  const [filters, setFilters] = useState<string[]>([]);

  const { cartList, addProduct, removeProduct } =
    useContext(ShoppingListContext);

  function handleToggleQueryParams() {
    setFilters([]);
  }

  async function handleFecthProducts() {
    const filteredProducts = await fetchProducts(filters);
    setProducts(filteredProducts);
  }

  async function handleFecthCategories() {
    const categoriesList = await fetchCategories();
    setCategories(categoriesList);
  }

  useEffect(() => {
    handleFecthProducts();
  }, [filters]);

  useEffect(() => {
    handleFecthCategories();
  }, []);

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
              <IconeCategoria data={item} onPress={handleToggleQueryParams} />
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
