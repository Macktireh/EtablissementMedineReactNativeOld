import React from "react";

import { Text, Heading, VStack, Center, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { WrapperScreen } from "#widgets/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import { InputCustom } from "#widgets/InputCustom";
import { ButtonCustom } from "#widgets/ButtonCustom";
import colors from "#constant/colors";

export const LoginScreen: React.FC = ({}): JSX.Element => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <WrapperScreen>
      <Heading color={colors[colorScheme].text}>Connexion</Heading>
      <Center mt={10} w="full">
        <VStack space="5" mb={10}>
          <InputCustom name="email" placeholder="Email" variant="underlined" />
          <InputCustom
            name="password"
            placeholder="Password"
            variant="underlined"
          />
        </VStack>
        <ButtonCustom
          text="Se connecter"
          onPress={() => console.log("Login!")}
        />
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
