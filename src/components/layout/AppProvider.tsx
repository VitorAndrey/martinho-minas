import { ReactNode } from "react";
import { View } from "react-native";

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { UserContextProvider } from "@contexts/UserContext";
import { ShoppingListProvider } from "@contexts/ShoppingList";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <View className="flex-1">
      <UserContextProvider>
        <ShoppingListProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {children}
          </SafeAreaProvider>
        </ShoppingListProvider>
      </UserContextProvider>
    </View>
  );
}
