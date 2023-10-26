import { ScrollView, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthNavigationRoutesProps } from "../routes/auth.routes";

import { Text } from "@ui/Text";
import { Input } from "@ui/Input";
import { TextBtn } from "@ui/TextBtn";
import { Header } from "@layout/Header";
import { GreenFooter } from "@layout/GreenFooter";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    Name: yup.string().required("Preencha o Nome."),
    Email: yup
      .string()
      .required("Preencha o Email.")
      .email("Insira um Email válido."),
    Passwd: yup
      .string()
      .required("Defina uma Senha.")
      .min(8, "A senha deve ter no mínimo 8 caracteres."),
    ConfirmPasswd: yup
      .string()
      .required("Confirme sua Senha.")
      .oneOf([yup.ref("Passwd")], "As duas senhas devem combinar."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Cadastro() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    navegarLogin();
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
          <Text className="mb-10 text-center text-xl font-semibold">
            Crie sua conta!
          </Text>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                label="Nome:"
              />
            )}
            name="Name"
          />
          <View className="h-6 justify-center px-4">
            {errors.Name && (
              <Text className="text-xs text-red-500">
                {errors.Name?.message}
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
                label="Email:"
              />
            )}
            name="Email"
          />
          <View className="h-6 justify-center px-4">
            {errors.Email && (
              <Text className="text-xs text-red-500">
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
              <Text className="text-xs text-red-500">
                {errors.Passwd?.message}
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
                label="Comfirmar senha:"
              />
            )}
            name="ConfirmPasswd"
          />
          <View className="h-6 justify-center px-4">
            {errors.ConfirmPasswd && (
              <Text className="text-xs text-red-500">
                {errors.ConfirmPasswd?.message}
              </Text>
            )}
          </View>

          <TextBtn className="mt-10" onPress={handleSubmit(onSubmit)}>
            Avançar
          </TextBtn>
        </View>

        <GreenFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
