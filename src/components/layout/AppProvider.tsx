import { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import { ShoppingListProvider } from "@contexts/ShoppingList";
import { UserContextProvider } from "@contexts/UserContext";

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
