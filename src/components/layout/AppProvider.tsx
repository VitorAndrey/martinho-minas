import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { View } from "react-native";
import { UserContextProvider } from "@contexts/UserContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <UserContextProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {children}
        </SafeAreaProvider>
      </UserContextProvider>
    </View>
  );
}
