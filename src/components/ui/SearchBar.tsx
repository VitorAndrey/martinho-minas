import { TextInput, TouchableOpacity, View, ViewProps } from "react-native";

import colors from "@theme/colors";

import { twMerge } from "tailwind-merge";

import { Search } from "lucide-react-native";

type SearchBarType = ViewProps & {};

export function SearchBar({ className, ...rest }: SearchBarType) {
  return (
    <View className={twMerge("flex-row gap-2", className)} {...rest}>
      <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-full bg-theme-pink-300">
        <Search color={colors["theme-icon"].active} size={16} />
      </TouchableOpacity>

      <TextInput className="h-12 flex-1 rounded-full bg-theme-green-300 px-5 text-base" />
    </View>
  );
}
