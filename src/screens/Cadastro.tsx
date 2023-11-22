import { useState } from "react";
import { ScrollView, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthNavigationRoutesProps } from "../routes/auth.routes";

import { Text } from "@ui/Text";
import { Input } from "@ui/Input";
import { TextBtn } from "@ui/TextBtn";
import { Header } from "@layout/Header";
import { Loading } from "@layout/Loading";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { RegisterUser } from "@models/index";
import { registerUser } from "@services/authentication";
import { InputErrorMessage } from "@layout/InputErrorMessage";

const schema = yup
  .object({
    name: yup.string().required("Preencha o Nome."),
    email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
     phoneNumber: yup
      .string()
      .required("Preencha o número de telefone.")
      .email("Insira um número válido."),
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

export function Cadastro() {
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
                }}
                label="Email:"
              />
            )}
            name="email"
          />
          <InputErrorMessage message={errors.email?.message} />

          <View className="h-12 flex-row items-center rounded-2xl bg-theme-green-300 px-4">
          <TextInput className="h-12 flex-1 px-2 font-poppins-400 text-base">Número de telefone:</TextInput>
          </View>
  
          <View className="h-6"></View>



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
            <TextBtn  className="mt-6 text-xl" onPress={handleSubmit(onSubmit)}>
              Avançar
            </TextBtn>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
