import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "@layout/Header";
import { InputErrorMessage } from "@layout/InputErrorMessage";
import { Loading } from "@layout/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { Text } from "@ui/Text";
import * as yup from "yup";

import { LoginUser } from "@models/index";
import { UserContext } from "@contexts/UserContext";
import { loginUser } from "@services/authentication";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    password: yup
      .string()
      .required("Insira sua Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleUserLogged, handleUpdateUserInfo } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const { email, password } = data;

    try {
      const user = await loginUser({
        email,
        password,
      } satisfies LoginUser);

      reset();
      handleUpdateUserInfo(user);
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem("@martinho:user", jsonValue);
      handleUserLogged();
    } catch (error) {
      Alert.alert(
        "Falha no login",
        "Email ou senha incorretos. Usuário não encontrado.",
        [{ text: "Confirmar", onPress: () => {} }],
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-theme-bg-100">
      <Header />

      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center p-10">
          <Text className="mb-10 text-center text-xl font-semibold">
            Faça o Login!
          </Text>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
                label="E-mail:"
              />
            )}
            name="email"
          />
          <InputErrorMessage message={errors.email?.message} />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                searchInput
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
                label="Senha:"
              />
            )}
            name="password"
          />
          <InputErrorMessage message={errors.password?.message} />

          {isLoading ? (
            <Loading className="mt-6 h-12 flex-[0] items-center justify-center" />
          ) : (
            <Button
              className="mt-6 w-28 self-center bg-transparent bg-theme-pink-300 text-xl"
              onPress={handleSubmit(onSubmit)}
            >
              Avançar
            </Button>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
