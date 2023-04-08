import React from "react";

import { Box, Center, HStack, Input, Text, VStack } from "native-base";
import { colors } from "#config/theme";
import { useColorScheme } from "#hooks/useColorScheme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable } from "react-native";
import { protectedScreenName } from "#screens/protected";

type PropsType = {
  nameScreen: string;
};

export const HeaderHome: React.FC<PropsType> = ({ nameScreen }) => {
  const colorScheme = useColorScheme();

  return (
    <Center bg={colors[colorScheme].background} w="full" pt="2" pb="2">
      {nameScreen === protectedScreenName.Home && (
        <Center w="full" h={6} pl="2" pr="2">
          <Text color={colors[colorScheme].text} fontFamily="body">
            Bienvenue{" "}
            <Text
              color={colors[colorScheme].secondary}
              fontSize="15"
              fontWeight="bold"
              fontFamily="body"
            >
              {"Macktireh Abdi Soubaneh"}
            </Text>
          </Text>
        </Center>
      )}
      <HStack justifyContent="center" w="full" bg={colors[colorScheme].background} mt="1.5">
        <Pressable
          onPress={() => console.info("searching ...")}
          style={{ width: "100%", alignItems: "center" }}
        >
          <Center
            bg={colors[colorScheme].grey[100]}
            w="90%"
            h={10}
            pl="2"
            pr="4"
            borderRadius="22"
            flexDirection={"row"}
          >
            <Ionicons name="search-outline" size={28} color={colors[colorScheme].grey[400]} />
            {/* <Inputw="85%"h="80%"variant="unstyled"pl="3"placeholder="Riz, lait, sucre, huile ..."focusable /> */}
            <Text w="85%" pl="3" color={colors[colorScheme].grey[400]}>
              Riz, lait, sucre, huile ...
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Center>
  );
};
