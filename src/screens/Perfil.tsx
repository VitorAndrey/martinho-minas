import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, TouchableOpacity } from "react-native";

import { UserContext } from "@contexts/UserContext";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { Input } from "@ui/Input";
import { InputErrorMessage } from "@layout/InputErrorMessage";
import { Check, Pencil } from "lucide-react-native";

const schema = yup
  .object({
    newName: yup.string(),
    newEmail: yup.string().email("Insira um Email válido."),
    newPassword: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "As duas senhas devem combinar."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export type ActiveInputType = "name" | "email" | "password" | null;

export function Perfil() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { handleUserUnlogged } = useContext(UserContext);

  const { userInfo } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (isEditing) {
      // await updateUser(data)
    }
    setIsEditing((prev) => !prev);
  };

  function handleLoggOut() {
    // await logout
    handleUserUnlogged();
  }

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <ScrollView className="flex-1 p-8">
        <Text className="mb-8 text-xl">Perfil</Text>
        <View className="flex-1">
          <Text className="px-2">Nome:</Text>
          <Controller
            defaultValue={userInfo.name}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  editable: isEditing,
                }}
              />
            )}
            name="newName"
          />
          <InputErrorMessage message={errors.newName?.message} />

          <Text className="px-2">E-mail:</Text>
          <Controller
            defaultValue={userInfo.email}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  editable: isEditing,
                }}
              />
            )}
            name="newEmail"
          />
          <InputErrorMessage message={errors.newEmail?.message} />

          <Text className="px-2">Senha:</Text>
          <Controller
            defaultValue={userInfo.password}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  editable: isEditing,
                }}
              />
            )}
            name="newPassword"
          />
          <InputErrorMessage message={errors.newPassword?.message} />

          <Text className="px-2">Número de telefone:</Text>
          <View className="mb-6">
            <Input inputProps={{ placeholder: "(00) 000000-0000" }} />
          </View>
        </View>

        <View className=" h-12 flex-row justify-center gap-10 self-center   ">
          <Btn className=" w-28 text-base" onPress={handleLoggOut}>
            Sair
          </Btn>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className=" h-12 w-28 flex-row items-center justify-center rounded-2xl bg-theme-pink-300 "
          >
            <Text className="mr-2 text-base">
              {isEditing ? "Salvar" : "Editar"}
            </Text>

            {isEditing ? (
              <Check color="black" size={18} />
            ) : (
              <Pencil color="black" size={16} />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
