import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Compras } from "@screens/Compras";
import { Mapa } from "@screens/Mapa";
import { Perfil } from "@screens/Perfil";
import { Map, ShoppingCart, User2 } from "lucide-react-native";

type AppRoutes = {
  Compras: undefined;
  Mapa: undefined;
  Perfil: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Compras"
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#222222",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Screen
        name="Compras"
        component={Compras}
        options={{ tabBarIcon: ({ color }) => <ShoppingCart color={color} /> }}
      />
      <Screen
        name="Mapa"
        component={Mapa}
        options={{ tabBarIcon: ({ color }) => <Map color={color} /> }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarIcon: ({ color }) => <User2 color={color} /> }}
      />
    </Navigator>
  );
}
