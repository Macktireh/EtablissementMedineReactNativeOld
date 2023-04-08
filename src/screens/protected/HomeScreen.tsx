import React from "react";

import { Box, Text, Center, VStack, ScrollView, Image, HStack, Pressable } from "native-base";

import { WrapperScreen } from "#components/shared/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import { colors } from "#config/theme";
import { CardCategory } from "#components/Home/CardCategory";

export const HomeScreen: React.FunctionComponent = () => {
  const colorScheme = useColorScheme();
  return (
    <WrapperScreen>
      <ScrollView w="full">
        <VStack w="full" bg={colors[colorScheme].background}>
          <Center
            bg={colors[colorScheme].background}
            w="full"
            p="2"
            flexWrap="wrap"
            flexDirection="row"
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <CardCategory
                key={index}
                index={index}
                text="Fruits"
                uri="https://www.pngall.com/wp-content/uploads/2016/03/Fruit.png"
              />
            ))}
          </Center>
        </VStack>
      </ScrollView>
    </WrapperScreen>
  );
};
