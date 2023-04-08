import React from "react";

import { Box, Text, Center, VStack, ScrollView } from "native-base";

import { WrapperScreen } from "#components/shared/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import { colors } from "#config/theme";

export const SearchScreen: React.FunctionComponent = () => {
  const colorScheme = useColorScheme();
  return (
    <WrapperScreen>
      <ScrollView w="full">
        <Center backgroundColor={colors[colorScheme].success}>
          <Text color={colors[colorScheme].text}>Hello world from SearchScreen !</Text>
        </Center>
      </ScrollView>
    </WrapperScreen>
  );
};
