import React, { PropsWithChildren } from "react";

import { Box } from "native-base";
import { colors } from "#config/theme";
import { useColorScheme } from "#hooks/useColorScheme";
import { HeaderHome } from "#components/Home/HeaderHome";

type PropsType = {
  nameScreen: string;
};

export const Header: React.FC<PropsType> = ({ nameScreen }) => {
  const colorScheme = useColorScheme();

  return (
    <HeaderHome nameScreen={nameScreen} />
    // <Box bg={colors[colorScheme].background} w="full" h={20}>
    //   <HeaderHome nameScreen={nameScreen} />
    // </Box>
  );
};
