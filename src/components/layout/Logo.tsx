import { Image } from "react-native";

const LogoImage = "@assets/logomt.png";

export function Logo() {
  return <Image className="h-12 w-12" source={require(LogoImage)} />;
}
