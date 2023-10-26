import { TextInput, TouchableOpacity, View, ViewProps } from "react-native";
import { Search } from "lucide-react-native";
import { twMerge } from "tailwind-merge";

type SearchBarType = ViewProps & {};

export function SearchBar({ className, ...rest }: SearchBarType) {
  return (
    <View className={twMerge("flex-row gap-2", className)} {...rest}>
      <TouchableOpacity className="bg-theme-pink-300 h-12 w-12 items-center justify-center rounded-full">
        <Search color="black" size={16} />
      </TouchableOpacity>

      <TextInput className="bg-theme-green-300 h-12 flex-1 rounded-full px-5 text-base" />
    </View>
  );
}
