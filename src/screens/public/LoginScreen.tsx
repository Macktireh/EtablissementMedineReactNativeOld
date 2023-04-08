import React from "react";
import { Text, Heading, VStack, Center, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { WrapperScreen } from "#components/shared/WrapperScreen";
import { Input } from "#components/shared/InputCustom";
import { ButtonCustom } from "#components/shared/ButtonCustom";
import { colors } from "#config/theme";
import { useColorScheme } from "#hooks/useColorScheme";
import { loginSchemaValidation } from "#utils/validation";
import { REACT_APP_EMAIL, REACT_APP_PASSWORD } from "@env";
import { loginService } from "#services/authService";
import { AuthLoginType } from "#types/authTyping";
import { useAppDispatch } from "#hooks/useDispatchAndSelector";
import { loginAction } from "#features/userSlice";

export const LoginScreen: React.FC = ({}): JSX.Element => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginType>({
    resolver: yupResolver(loginSchemaValidation),
    defaultValues: {
      email: REACT_APP_EMAIL || "",
      password: REACT_APP_PASSWORD || "",
    },
  });

  const onSubmit = (data: AuthLoginType) => {
    loginService(data).then((res) => {
      if (res.status === 200) {
        console.log("Login success", res.data.tokens);
        // dispatch(loginAction)
      } else {
        console.log("Login failed", res);
        navigation.navigate("Verification");
      }
    });
  };

  return (
    <WrapperScreen>
      <Heading color={colors[colorScheme].text} mb={10}>
        Connectez-vous à votre compte
      </Heading>
      <Center mt={10} width="85%">
        <VStack space="8" mb={10}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                name="email"
                placeholder="Email"
                variant="underlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email && errors.email.message}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                name="password"
                type="password"
                placeholder="Mot de passe"
                variant="underlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password && errors.password.message}
              />
            )}
            name="password"
          />
        </VStack>
        <ButtonCustom text="Se connecter" onPress={handleSubmit(onSubmit)} />
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text
            color={colors[colorScheme].text}
            textDecorationLine={colors[colorScheme].text}
            textDecoration="underline"
            mt={4}
          >
            S'incrire
          </Text>
        </Pressable>
      </Center>
    </WrapperScreen>
  );
};
