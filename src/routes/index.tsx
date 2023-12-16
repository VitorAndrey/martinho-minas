import { useContext } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { UserContext } from "@contexts//UserContext";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { isUserLogged } = useContext(UserContext);

  return (
    <View className="flex-1 bg-theme-bg-100 pt-10">
      <NavigationContainer>
        {isUserLogged ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
