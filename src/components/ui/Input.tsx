import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { Text } from "./Text";
import { twMerge } from "tailwind-merge";

type InputProps = ViewProps & {
  inputClass?: TextInputProps["className"];
  label: string;
};

export function Input({ className, label, inputClass, ...rest }: InputProps) {
  return (
    <View
      className={twMerge(
        "bg-theme-green-100 h-12 flex-row items-center rounded-2xl px-4",
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
      />
    </View>
  );
}
