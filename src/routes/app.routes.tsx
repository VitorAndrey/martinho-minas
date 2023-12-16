import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { CartIcon } from "@ui/CartIcon";

import { Cart } from "@screens/app/Cart";
import { Map } from "@screens/app/Map";
import { Profile } from "@screens/app/Profile";
import { Promotions } from "@screens/app/Promotions";
import { Shopping } from "@screens/app/Shopping";

import {
  BadgePercentIcon,
  MapIcon,
  StoreIcon,
  User2Icon,
} from "lucide-react-native";

import colors from "@theme/colors";

type AppRoutes = {
  Shopping: undefined;
  Promotions: undefined;
  Map: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Promotions"
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors["theme-icon"].active,
        tabBarInactiveTintColor: colors["theme-icon"].inactive,
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Screen
        name="Promotions"
        component={Promotions}
        options={{
          tabBarIcon: ({ color }) => <BadgePercentIcon color={color} />,
        }}
      />
      <Screen
        name="Shopping"
        component={Shopping}
        options={{ tabBarIcon: ({ color }) => <StoreIcon color={color} /> }}
      />

      <Screen
        name="Cart"
        component={Cart}
        options={{ tabBarIcon: ({ color }) => <CartIcon color={color} /> }}
      />

      <Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => <MapIcon color={color} />,
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: ({ color }) => <User2Icon color={color} /> }}
      />
    </Navigator>
  );
}
