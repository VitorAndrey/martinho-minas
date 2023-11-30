import { TextInput, View, ViewProps, TextInputProps } from "react-native";

import { twMerge, ClassNameValue } from "tailwind-merge";

import { Text } from "./Text";
import { ReactNode, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import colors from "@theme/colors";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
  label?: string;
  searchInput?: boolean;
  icon?: () => ReactNode;
};

export function Input({
  searchInput = false,
  containerProps,
  inputProps,
  icon,
  label,
}: InputProps) {
  const [charsHidden, setCharsHidden] = useState<boolean>(true);

  function handleToggleHidden() {
    setCharsHidden((prev) => !prev);
  }

  return (
    <View
      className={twMerge(
        `h-12 flex-row items-center rounded-2xl bg-theme-green-300 px-4 ${
          searchInput && "pr-0"
        }`,
        containerProps?.containerClass,
      )}
      {...containerProps}
    >
      {label && <Text>{label}</Text>}
      <TextInput
        secureTextEntry={searchInput && charsHidden}
        className={twMerge(
          "h-12 flex-1 px-2 font-poppins-400 text-base",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />

      {icon && icon()}

      {searchInput && (
        <TouchableOpacity
          onPress={handleToggleHidden}
          className="h-12 w-12 items-center justify-center"
        >
          {charsHidden ? (
            <EyeIcon color={colors["theme-icon"].active} size={22} />
          ) : (
            <EyeOffIcon color={colors["theme-icon"].active} size={22} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
