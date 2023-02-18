import React from "react";

import { Box, Text, Center, VStack, ScrollView } from "native-base";

import { WrapperScreen } from "#widgets/WrapperScreen";

export const ContactScreen: React.FunctionComponent = () => {
  return (
    <WrapperScreen>
      <ScrollView>
        <Center backgroundColor="green.500">
          <Text color="light.500">Hello world from ContactScreen</Text>
        </Center>
        <Box mt="4" bg="primary.500">
          <VStack space={11} alignItems="center" bg="secondary.300" px="50">
            <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
            <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
          </VStack>
          ;
        </Box>
      </ScrollView>
    </WrapperScreen>
  );
};
