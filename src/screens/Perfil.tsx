import { View, Keyboard } from "react-native";
import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { UserContext } from "@contexts/UserContext";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

import { Btn } from "@ui/Btn";
import { Text } from "@ui/Text";
import { Header } from "@layout/Header";
import { UserInfoInput } from "@ui/UserInfoInput";

const schema = yup
  .object({
    newName: yup.string(),
    newEmail: yup.string().email("Insira um Email válido."),
    newPassword: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("Passwd")], "As duas senhas devem combinar."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export type ActiveInputType = "name" | "email" | "password" | null;

export function Perfil() {
  const [activeInput, setActiveInput] = useState<ActiveInputType>(null);
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
    console.log(data);
  };

  function handleLoggOut() {
    // await logout
    handleUserUnlogged();
  }

  function handleChangeActiveInput(value: ActiveInputType) {
    setActiveInput((prev) => {
      if (prev === value) {
        handleSubmit(onSubmit);

        return null;
      } else {
        return value;
      }
    });
  }

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1 p-8">
        <Text className="mb-8 text-xl">Perfil</Text>

        <Text className="px-2">Nome:</Text>
        <Controller
          defaultValue={userInfo.name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <UserInfoInput
              name="name"
              isActive={activeInput === "name"}
              onChangeActiveInput={handleChangeActiveInput}
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
              }}
              containerProps={{
                containerClass: "mb-6",
              }}
            />
          )}
          name="newName"
        />

        <Text className="px-2">E-mail:</Text>
        <Controller
          defaultValue={userInfo.email}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <UserInfoInput
              name="email"
              isActive={activeInput === "email"}
              onChangeActiveInput={handleChangeActiveInput}
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
              }}
              containerProps={{
                containerClass: "mb-6",
              }}
            />
          )}
          name="newEmail"
        />

        <Text className="px-2">Senha:</Text>
        <Controller
          defaultValue={userInfo.password}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <UserInfoInput
              name="password"
              isActive={activeInput === "password"}
              onChangeActiveInput={handleChangeActiveInput}
              inputProps={{
                onChangeText: onChange,
                onBlur: onBlur,
                value: value,
              }}
            />
          )}
          name="newPassword"
        />
      </View>

      <Btn className="my-4 mx-8" onPress={handleLoggOut}>
        Sair
      </Btn>
    </SafeAreaView>
  );
}
