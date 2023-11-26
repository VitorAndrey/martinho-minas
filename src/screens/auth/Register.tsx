import { useState } from "react";
import { ScrollView, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { RegisterUser } from "@models/index";
import { registerUser } from "@services/authentication";
import { InputErrorMessage } from "@layout/InputErrorMessage";

import { Text } from "@ui/Text";
import { Input } from "@ui/Input";
import { Button } from "@ui/Button";
import { Header } from "@layout/Header";
import { Loading } from "@layout/Loading";

const schema = yup
  .object({
    name: yup.string().required("Preencha o Nome."),
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    phoneNumber: yup.string().required("Preencha o Telefone."),
    password: yup
      .string()
      .required("Defina uma Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirmPassword: yup
      .string()
      .required("Confirme sua Senha.")
      .oneOf([yup.ref("password")], "As duas senhas devem combinar."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<AuthNavigationRoutesProps>();

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

    const { name, email, password } = data;

    try {
      await registerUser({
        name,
        email,
        password,
      } satisfies RegisterUser);

      reset();
      navegarLogin();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  function navegarLogin() {
    navigation.navigate("Login");
  }
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center p-10">
          <Text className="mb-10 text-center text-2xl font-semibold">
            Crie sua conta!
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
                label="Nome:"
              />
            )}
            name="name"
          />
          <InputErrorMessage message={errors.name?.message} />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  keyboardType: "email-address",
                }}
                label="Email:"
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
                  keyboardType: "phone-pad",
                }}
                label="Telefone:"
              />
            )}
            name="phoneNumber"
          />
          <InputErrorMessage message={errors.phoneNumber?.message} />

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

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
                label="Confirmar senha:"
              />
            )}
            name="confirmPassword"
          />
          <InputErrorMessage message={errors.confirmPassword?.message} />

          {isLoading ? (
            <Loading className="mt-7 flex-[0]" />
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
