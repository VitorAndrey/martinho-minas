import { useContext, useState } from "react";
import { ScrollView, View } from "react-native";

import { UserContext } from "@contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Input } from "@ui/Input";
import { TextBtn } from "@ui/TextBtn";
import { Header } from "@layout/Header";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "@services/auth";
import { Loading } from "@layout/Loading";

const schema = yup
  .object({
    Email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    Passwd: yup
      .string()
      .required("Insira sua Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleUserLogged } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);

    try {
      login(data.Email, data.Passwd);
      reset();
      handleUserLogged();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <ScrollView
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
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                label="Email:"
              />
            )}
            name="Email"
          />
          <View className="h-6 justify-center px-4">
            {errors.Email && (
              <Text className="text-xs text-theme-red-500">
                {errors.Email?.message}
              </Text>
            )}
          </View>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                label="Senha:"
              />
            )}
            name="Passwd"
          />
          <View className="h-6 justify-center px-4">
            {errors.Passwd && (
              <Text className="text-xs text-theme-red-500">
                {errors.Passwd?.message}
              </Text>
            )}
          </View>

          {isLoading ? (
            <Loading className="mt-7 flex-[0]" />
          ) : (
            <TextBtn className="mt-6" onPress={handleSubmit(onSubmit)}>
              Avançar
            </TextBtn>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
