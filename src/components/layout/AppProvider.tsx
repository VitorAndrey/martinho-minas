import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { View } from "react-native";
import { UserContextProvider } from "@contexts/UserContext";
import { ShoppingListProvider } from "@contexts/ShoppingList";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ShoppingListProvider>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              {children}
            </SafeAreaProvider>
          </ShoppingListProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </View>
  );
}
