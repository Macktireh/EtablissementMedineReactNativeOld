import React from "react";

import { Box, Text, Center, VStack, Image, HStack, Pressable } from "native-base";

import { useColorScheme } from "#hooks/useColorScheme";
import { colors } from "#config/theme";

type propsType = {
  index: number;
  text: string;
  uri: string;
};

export const CardCategory: React.FC<propsType> = ({ index, text, uri }) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable w={index < 2 ? "48%" : "32%"} onPress={() => console.table([1, 2, 3])}>
      <Center
        bg={colors[colorScheme].grey[100]}
        flexDirection="column"
        p="2"
        mr={2}
        mb={2}
        borderRadius="8"
      >
        <Image w="80%" h="50" alt="Fruits" source={{ uri }} />
        <Text color={colors[colorScheme].text} fontFamily="body" mt="2">
          {text}
        </Text>
      </Center>
    </Pressable>
  );
};
