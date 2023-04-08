import React from "react";

import { Text, Center, VStack } from "native-base";

import { WrapperScreen } from "#components/shared/WrapperScreen";

export const NotFoundScreen: React.FunctionComponent = () => {
  return (
    <WrapperScreen>
      <VStack space={11} alignItems="center" bg="secondary.300" px="50">
        <Center backgroundColor="green.500">
          <Text color="light.500">Hello world from NotFoundScreen</Text>
        </Center>
      </VStack>
    </WrapperScreen>
  );
};
