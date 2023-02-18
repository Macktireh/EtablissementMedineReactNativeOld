import React from "react";

import { Text, Heading, VStack, Center, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { WrapperScreen } from "#widgets/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import { InputCustom } from "#widgets/InputCustom";
import { ButtonCustom } from "#widgets/ButtonCustom";
import colors from "#constant/colors";

export const SignupScreen: React.FC = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <WrapperScreen>
      <Heading color={colors[colorScheme].text}>Inscription</Heading>
      <Center mt={10} w="full">
        <VStack space="5" mb={10}>
          <InputCustom
            name="person"
            placeholder="Nom complet (ex: Ali ABDI OSMAN)"
            variant="underlined"
          />
          <InputCustom
            name="phone"
            placeholder="Numéro téléphone"
            variant="underlined"
          />
          <InputCustom name="email" placeholder="Email" variant="underlined" />
          <InputCustom
            name="password"
            placeholder="Mot de passe"
            variant="underlined"
          />
          <InputCustom
            name="password"
            placeholder="Confirmer mot de passe"
            variant="underlined"
          />
        </VStack>
        <ButtonCustom text="S'incrire" onPress={() => console.log("Signup!")} />
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
