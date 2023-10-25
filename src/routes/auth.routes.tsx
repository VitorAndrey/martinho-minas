import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Login } from "@screens/Login";
import { Inicio } from "@screens/Inicio";
import { Cadastro } from "@screens/Cadastro";

export type AuthRoutes = {
  Inicio: undefined;
  Login: undefined;
  Cadastro: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
      <Screen name="Inicio" component={Inicio} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={Cadastro} />
    </Navigator>
  );
}
