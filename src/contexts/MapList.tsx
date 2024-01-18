import { createContext, ReactNode, useState } from "react";

import { Product } from "@models/index";

export type MapProduct = Product & {
  alreadyBought: boolean;
};

export type MapAisle = {
  AisleNumber: number;
  products: MapProduct[];
  promotions: Product[];
};

type MapListContextProps = {
  mapList: MapAisle[];
  handleSetMapList: (aisles: MapAisle[]) => void;
  toggleProductStatus: (productId: string) => void;
};

export const MapListContext = createContext({} as MapListContextProps);

export function MapListProvider({ children }: { children: ReactNode }) {
  const [mapList, setMapList] = useState<MapAisle[]>([]);

  function handleSetMapList(aisles: MapAisle[]) {
    setMapList(aisles);
  }

  function toggleProductStatus(productId: string) {
    setMapList((prevMapList) => {
      const list = prevMapList;

      prevMapList.map((mapAisle, i) => {
        mapAisle.products.map((product, j) => {
          if (product.id === productId) {
            list[i].products[j].alreadyBought =
              !list[i].products[j].alreadyBought;
          }
        });
      });

      return list;
    });
  }

  return (
    <MapListContext.Provider
      value={{ handleSetMapList, mapList, toggleProductStatus }}
    >
      {children}
    </MapListContext.Provider>
  );
}
