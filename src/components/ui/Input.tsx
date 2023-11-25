import { TextInput, View, ViewProps, TextInputProps } from "react-native";

import { twMerge, ClassNameValue } from "tailwind-merge";

import { Text } from "./Text";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
  label?: string;
};

export function Input({ containerProps, inputProps, label }: InputProps) {
  return (
    <View
      className={twMerge(
        "h-12 flex-row items-center rounded-2xl bg-theme-green-300 px-4",
        containerProps?.containerClass,
      )}
      {...containerProps}
    >
      {label && <Text>{label}</Text>}
      <TextInput
        className={twMerge(
          "h-12 flex-1 px-2 font-poppins-400 text-base",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />
    </View>
  );
}
