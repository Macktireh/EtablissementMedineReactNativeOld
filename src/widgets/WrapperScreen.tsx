import React, { PropsWithChildren } from "react";

import { Box } from "native-base";
import colors from "#constant/colors";
import { useColorScheme } from "#hooks/useColorScheme";

type PropsType = PropsWithChildren<{
  children: React.ReactNode;
}>;

export const WrapperScreen: React.FC<PropsType> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <Box
      flex={1}
      bg={colors[colorScheme].background}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};
