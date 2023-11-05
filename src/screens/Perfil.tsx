import { UserContext } from "@contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "@layout/Header";
import { Btn } from "@ui/Btn";
import { IconBtn } from "@ui/IconBtn";
import { Input } from "@ui/Input";
import { Text } from "@ui/Text";
import { TextBtn } from "@ui/TextBtn";
import { Pencil } from "lucide-react-native";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";

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

export function Perfil() {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const { handleUserUnlogged } = useContext(UserContext);

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

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1 p-8">
        <Text className="mb-8 text-lg">Perfil</Text>

        <Text className="mb-2">Nome:</Text>
        <View className="flex-row items-center gap-1">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                containerProps={{
                  containerClass: "flex-1",
                }}
                inputProps={{
                  editable: isEditing,
                  onChange,
                  onBlur,
                  value,
                }}
              />
            )}
            name="newName"
          />
          <IconBtn>
            <Pencil color="black" />
          </IconBtn>
        </View>
      </View>

      <TextBtn disabled={!isEditing} onPress={handleSubmit(onSubmit)}>
        Salvar
      </TextBtn>

      <Btn className="my-4 mx-8" onPress={handleLoggOut}>
        Sair
      </Btn>
    </SafeAreaView>
  );
}
