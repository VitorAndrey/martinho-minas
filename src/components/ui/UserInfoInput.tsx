import {
  TextInput,
  View,
  ViewProps,
  TextInputProps,
  Keyboard,
} from "react-native";
import { twMerge, ClassNameValue } from "tailwind-merge";
import { IconBtn } from "./IconBtn";
import { useEffect, useRef, useState } from "react";
import { Check, Pencil } from "lucide-react-native";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
  onSaveData: () => void;
};

export function UserInfoInput({
  containerProps,
  onSaveData,
  inputProps,
}: InputProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const textInputRef = useRef<TextInput>(null);

  function handleIsEditing() {
    if (isEditing) {
      onSaveData();
      Keyboard.dismiss();
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
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
        editable={isEditing}
        ref={textInputRef}
        className={twMerge(
          "mr-1 h-12 flex-1 rounded-2xl bg-theme-green-300 px-6 font-poppins-400 text-base",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />

      <IconBtn
        className={isEditing ? "" : "bg-zinc-300"}
        onPress={handleIsEditing}
      >
        {isEditing ? (
          <Check color="black" size={20} />
        ) : (
          <Pencil color="gray" size={18} />
        )}
      </IconBtn>
    </View>
  );
}
