import { Image, ImageProps } from "react-native";

import { twMerge } from "tailwind-merge";

type LogoProps = Omit<ImageProps, "source">;

export function Logo({ className, ...rest }: LogoProps) {
  return (
    <Image
      className={twMerge("h-12 w-12", className)}
      source={require("@assets/logomt.png")}
      {...rest}
    />
  );
}
