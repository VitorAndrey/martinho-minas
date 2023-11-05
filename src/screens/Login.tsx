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
import { loginUser } from "@services/authentication";
import { Loading } from "@layout/Loading";
import { UserLogin } from "@models/index";
import { InputErrorMessage } from "@layout/InputErrorMessage";

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
  const { handleUserLogged } = useContext(UserContext);

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
      // await loginUser({
      //   email,
      //   password,
      // } satisfies UserLogin);

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
