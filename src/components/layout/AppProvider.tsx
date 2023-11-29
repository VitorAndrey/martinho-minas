import { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { UserContextProvider } from "@contexts/UserContext";
import { ShoppingListProvider } from "@contexts/ShoppingList";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserContextProvider>
        <ShoppingListProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {children}
          </SafeAreaProvider>
        </ShoppingListProvider>
      </UserContextProvider>
    </GestureHandlerRootView>
  );
}
