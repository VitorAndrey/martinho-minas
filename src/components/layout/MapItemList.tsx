import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View, ViewProps } from "react-native";

// Importe os outros componentes e estilos necessários
import { styles } from "@styles/inlineStyles";
import { Button } from "@ui/Button";
import { twMerge } from "tailwind-merge";

import { MapListContext, MapProduct } from "@contexts/MapList";

import { BadgeCheckIcon, BadgePercentIcon } from "lucide-react-native";

import colors from "@theme/colors";

type MapItemListProps = ViewProps & {
  product: MapProduct;
  isPromotional?: boolean;
};

export function MapItemList({
  isPromotional,
  product,
  className,
  ...rest
}: MapItemListProps) {
  const [localAlreadyBought, setLocalAlreadyBought] = useState<boolean>(false);
  const { toggleProductStatus, mapList } = useContext(MapListContext);

  useEffect(() => {
    // Verifique se o produto está na lista
    const productInList = mapList.find((mapAisle) =>
      mapAisle.products.some((mapProduct) => mapProduct.id === product.id),
    );

    // Atualize o estado local com base no contexto
    if (productInList) {
      const { alreadyBought } = productInList.products.find(
        (mapProduct) => mapProduct.id === product.id,
      ) || { alreadyBought: false };
      setLocalAlreadyBought(alreadyBought);
    }
  }, [mapList, product]);

  function handleAlreadyBought() {
    // Atualize o estado local primeiro
    setLocalAlreadyBought((prev) => !prev);

    // Em seguida, execute a ação no contexto
    toggleProductStatus(product.id);
  }

  return (
    <View
      style={styles.boxShadow}
      className={twMerge(
        "h-full w-40 flex-1 items-center rounded-3xl border border-zinc-200 bg-zinc-50 p-3",
        className,
      )}
      {...rest}
    >
      <Text className="mb-2 p-1 text-center" numberOfLines={1}>
        {product.name}
      </Text>

      <View className="relative h-24 w-24 flex-1 pr-2">
        <Image
          source={{ uri: product.image_url }}
          className="h-full w-full rounded-xl object-cover"
        />

        {product.discount_percentage > 0 && (
          <BadgePercentIcon
            color={colors["theme-icon"].active}
            className="absolute bottom-1 right-1 rounded-full bg-theme-green-300"
            size={16}
          />
        )}
      </View>

      {!isPromotional && (
        <>
          <Button
            onPress={handleAlreadyBought}
            className={`mt-4 h-8 w-full rounded-xl ${
              localAlreadyBought && "bg-theme-gray-200"
            }`}
            textClassName="text-xs"
          >
            {localAlreadyBought ? "Não adicionei" : "Adicionei"}
          </Button>

          {localAlreadyBought ? (
            <View className="absolute -top-2 -left-2 h-8 w-8 items-center justify-center rounded-xl bg-theme-green-300">
              <BadgeCheckIcon color={colors["theme-icon"].active} size={20} />
            </View>
          ) : (
            <View className="absolute -top-2 -left-2 h-8 w-8 items-center justify-center rounded-xl"></View>
          )}
        </>
      )}
    </View>
  );
}
