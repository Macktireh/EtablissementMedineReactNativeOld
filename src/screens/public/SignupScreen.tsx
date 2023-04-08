import React from "react";
import { Text, Heading, VStack, Center, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { WrapperScreen } from "#components/shared/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import { Input } from "#components/shared/InputCustom";
import { ButtonCustom } from "#components/shared/ButtonCustom";
import { colors } from "#config/theme";
import { AuthSignupType } from "#types/authTyping";
import { signupSchemaValidation } from "#utils/validation";
import { REACT_APP_EMAIL, REACT_APP_NAME, REACT_APP_PASSWORD, REACT_APP_PHONE } from "@env";
import { signupService } from "#services/authService";

export const SignupScreen: React.FC = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSignupType>({
    resolver: yupResolver(signupSchemaValidation),
    defaultValues: {
      name: REACT_APP_NAME || "",
      phone: REACT_APP_PHONE || "",
      email: REACT_APP_EMAIL || "",
      password: REACT_APP_PASSWORD || "",
      confirmPassword: REACT_APP_PASSWORD || "",
    },
  });

  const onSubmit = (data: AuthSignupType) => {
    signupService(data).then((res) => {
      if (res.status === 201) {
        console.log("Signup success", res);
      } else {
        console.log("Signup failed", res);
        navigation.navigate("Verification");
      }
    });
  };

  return (
    <WrapperScreen>
      <Heading color={colors[colorScheme].text} mb={10}>
        Inscrivez-vous dès maintenant !
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
                name="person"
                placeholder="Nom complet (ex: Ali ABDI OSMAN)"
                variant="underlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.name && errors.name.message}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                name="phone"
                placeholder="Numéro téléphone"
                variant="underlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.phone && errors.phone.message}
              />
            )}
            name="phone"
          />
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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                name="password"
                type="password"
                placeholder="Confirmer mot de passe"
                variant="underlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.confirmPassword && errors.confirmPassword.message}
              />
            )}
            name="confirmPassword"
          />
        </VStack>
        <ButtonCustom text="S'incrire" onPress={handleSubmit(onSubmit)} />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            color={colors[colorScheme].text}
            textDecorationLine={colors[colorScheme].text}
            textDecoration="underline"
            mt={4}
          >
            Se connecter
          </Text>
        </Pressable>
      </Center>
    </WrapperScreen>
  );
};
