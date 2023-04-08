import React from "react";

import { Box, Text, Center, VStack, Image, HStack, Pressable } from "native-base";

import { useColorScheme } from "#hooks/useColorScheme";
import { colors } from "#config/theme";
import { ProductType } from "#types/productTyping";

type propsType = {
  product: ProductType;
};

export const CardProduct: React.FC<propsType> = ({ product }) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable onPress={() => console.table([1, 2, 3])}>
      <Center
        bg={colors[colorScheme].grey[100]}
        flexDirection="column"
        p="2"
        mr={2}
        mb={2}
        borderRadius="8"
      >
        <Image w="80%" h="50" alt={product.name} source={{ uri: product.thumbnail }} />
        <Text color={colors[colorScheme].text} fontFamily="body" mt="2">
          {product.name}
        </Text>
      </Center>
    </Pressable>
  );
};
