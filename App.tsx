import "react-native-gesture-handler";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AppProvider } from "@layout//AppProvider";
import { Loading } from "@layout//Loading";
import { Routes } from "@routes/index";

import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <AppProvider>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </AppProvider>
  );
}
