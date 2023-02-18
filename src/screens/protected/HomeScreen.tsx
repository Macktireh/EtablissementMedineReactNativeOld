import React from "react";

import { Box, Text, Center, VStack, ScrollView } from "native-base";

import { WrapperScreen } from "#widgets/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import colors from "#constant/colors";

export const HomeScreen: React.FunctionComponent = () => {
  const colorScheme = useColorScheme();
  return (
    <WrapperScreen>
      <ScrollView>
        <Center backgroundColor={colors[colorScheme].success}>
          <Text color={colors[colorScheme].text}>
            Hello world from HomeScreen
          </Text>
        </Center>
        <Box mt="4" bg="primary.500">
          <VStack space={10} alignItems="center" bg="secondary.300" px="50">
            <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
          </VStack>
          ;
        </Box>
      </ScrollView>
    </WrapperScreen>
  );
};
