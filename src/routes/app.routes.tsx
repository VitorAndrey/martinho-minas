import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Mapa } from "@screens/Mapa";
import { Promocoes } from "@screens/Promocoes";
import { Perfil } from "@screens/Perfil";
import { Compras } from "@screens/Compras";

import {
  BadgePercent,
  Map,
  ShoppingCart,
  Store,
  User2,
} from "lucide-react-native";
import { Cart } from "@screens/Cart";
import { CartIcon } from "@ui/CartIcon";

type AppRoutes = {
  Compras: undefined;
  Promocoes: undefined;
  Mapa: undefined;
  Cart: undefined;
  Perfil: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Promocoes"
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
        name="Promocoes"
        component={Promocoes}
        options={{ tabBarIcon: ({ color }) => <BadgePercent color={color} /> }}
      />
      <Screen
        name="Compras"
        component={Compras}
        options={{ tabBarIcon: ({ color }) => <Store color={color} /> }}
      />
      <Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ color }) => <Map color={color} />,
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name="Cart"
        component={Cart}
        options={{ tabBarIcon: ({ color }) => <CartIcon color={color} /> }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarIcon: ({ color }) => <User2 color={color} /> }}
      />
    </Navigator>
  );
}
