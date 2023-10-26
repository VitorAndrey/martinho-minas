import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { Text } from "./Text";
import { twMerge } from "tailwind-merge";

type InputProps = ViewProps & {
  inputClass?: TextInputProps["className"];
  label: string;
  onChangeText: TextInputProps["onChangeText"];
  onBlur: TextInputProps["onBlur"];
  value: TextInputProps["value"];
};

export function Input({
  className,
  onBlur,
  onChangeText,
  value,
  label,
  inputClass,
  ...rest
}: InputProps) {
  return (
    <View
      className={twMerge(
        "bg-theme-green-300 h-12 flex-row items-center rounded-2xl px-4",
        className,
      )}
      {...rest}
    >
      <Text className="">{label}</Text>
      <TextInput
        className={twMerge(
          "flex-1 px-2 font-poppins-400 text-base",
          inputClass,
        )}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
