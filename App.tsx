import "react-native-gesture-handler";

import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import { AppProvider } from "@layout//AppProvider";
import { Loading } from "@layout//Loading";
import { Routes } from "@routes/index";

import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (
    <AppProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </AppProvider>
  );
}
