import {
  TextInput,
  View,
  ViewProps,
  TextInputProps,
  Keyboard,
} from "react-native";
import { twMerge, ClassNameValue } from "tailwind-merge";
import { IconBtn } from "./IconBtn";
import { useRef } from "react";
import { Check, Pencil } from "lucide-react-native";
import { ActiveInputType } from "@screens/Perfil";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
  onSaveData: () => void;
  onChangeActiveInput: (value: ActiveInputType) => void;
  isActive: boolean;
  name: "email" | "name" | "password";
};

export function UserInfoInput({
  containerProps,
  onSaveData,
  inputProps,
  onChangeActiveInput,
  isActive,
  name,
}: InputProps) {
  const textInputRef = useRef<TextInput>(null);

  function handleIsEditing() {
    onChangeActiveInput(name);
  }

  return (
    <View
      className={twMerge(
        "h-12 flex-row items-center",
        containerProps?.containerClass,
      )}
      {...containerProps}
    >
      <TextInput
        editable={isActive}
        ref={textInputRef}
        className={twMerge(
          "mr-1 h-12 flex-1 rounded-2xl bg-theme-green-300 px-6 font-poppins-400 text-base",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />

      <IconBtn
        className={isActive ? "" : "bg-zinc-300"}
        onPress={handleIsEditing}
      >
        {isActive ? (
          <Check color="black" size={20} />
        ) : (
          <Pencil color="gray" size={18} />
        )}
      </IconBtn>
    </View>
  );
}
