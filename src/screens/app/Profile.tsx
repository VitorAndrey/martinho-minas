import { useContext } from "react";
// import { Controller } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "@layout/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { InputErrorMessage } from "@layout/InputErrorMessage";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { Text } from "@ui/Text";

// import * as yup from "yup";
// import { UpdateUser } from "@models/index";
import { UserContext } from "@contexts/UserContext";

// import { updateUser } from "@services/updateData";
import { LogOutIcon } from "lucide-react-native";

import colors from "@theme/colors";

// const schema = yup
//   .object({
//     name: yup.string().required("O nome é obrigatório."),
//     email: yup
//       .string()
//       .email("Insira um Email válido.")
//       .required("O Email é obrigatório."),
//     phoneNumber: yup.string(),
//     password: yup
//       .string()
//       .min(8, "A senha deve ter no mínimo 8 caracteres.")
//       .required("A senha é obrigatória."),
//   })
//   .required();

// type FormData = yup.InferType<typeof schema>;

export type ActiveInputType = "name" | "email" | "password" | null;

export function Profile() {
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  const { handleUserUnlogged } = useContext(UserContext);

  const { userInfo, handleUpdateUserInfo } = useContext(UserContext);

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = async (data: FormData) => {
  //   const { email, name, password, phoneNumber } = data;

  //   if (isEditing) {
  //     if (!userInfo) return;

  //     await updateUser({
  //       id: userInfo.id,
  //       email,
  //       name,
  //       password,
  //       phoneNumber,
  //     } satisfies UpdateUser);
  //   }

  //   setIsEditing((prev) => !prev);
  // };

  async function handleLoggOut() {
    await AsyncStorage.removeItem("@martinho:user");
    handleUpdateUserInfo(null);
    handleUserUnlogged();
  }

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <ScrollView className="flex-1 p-8">
        <Text className="mb-8 text-xl">Perfil</Text>
        <View className="flex-1">
          <Text className="px-2">Nome:</Text>
          {/* <Controller
            defaultValue={userInfo?.name}
            // control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  editable: false,
                }}
              />
            )}
            name="name"
          /> */}
          <Input
            inputProps={{
              defaultValue: userInfo?.name,
              editable: false,
            }}
          />
          {/* <InputErrorMessage message={errors.name?.message} /> */}

          <Text className="px-2 pt-2">E-mail:</Text>
          {/* <Controller
            defaultValue={userInfo?.email}
            // control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                inputProps={{
                  onChangeText: onChange,
                  onBlur: onBlur,
                  value: value,
                  editable: false,
                }}
              />
            )}
            name="email"
          /> */}
          <Input
            inputProps={{
              defaultValue: userInfo?.email,
              editable: false,
            }}
          />
          {/* <InputErrorMessage message={errors.email?.message} /> */}

          {/* <Text className="px-2">Telefone:</Text>
          <Controller
            defaultValue={userInfo?.phone}
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
            name="phoneNumber"
          />
          <InputErrorMessage message={errors.phoneNumber?.message} /> */}

          {/* <Text className="px-2">Senha:</Text>
          <Controller
            defaultValue={userInfo?.password}
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
            name="password"
          />
          <InputErrorMessage message={errors.password?.message} /> */}
        </View>
      </ScrollView>

      <View className="flex-row py-4 px-8">
        {/* <Button
          className="mr-4 flex-1 bg-theme-green-300"
          onPress={handleSubmit(onSubmit)}
          icon={() => {
            if (isEditing) {
              return (
                <CheckIcon
                  color={colors["theme-icon"].active}
                  size={18}
                  className="ml-2"
                />
              );
            } else {
              return (
                <PencilIcon
                  color={colors["theme-icon"].active}
                  size={16}
                  className="ml-2"
                />
              );
            }
          }}
        >
          {isEditing ? "Salvar" : "Editar"}
        </Button> */}
        <Button
          className="flex-1 bg-theme-pink-300"
          onPress={handleLoggOut}
          icon={() => (
            <LogOutIcon
              color={colors["theme-icon"].active}
              className="ml-2"
              size={18}
            />
          )}
        >
          Sair
        </Button>
      </View>
    </SafeAreaView>
  );
}
