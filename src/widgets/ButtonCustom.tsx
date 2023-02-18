import React from "react";

import { Input, Icon, Pressable, Button } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import colors from "#constant/colors";
import { useColorScheme } from "#hooks/useColorScheme";

type propsTypes = {
  text: string;
  variant?: "underlined" | "outlined" | "filled" | "unstyled" | "rounded";
  // color: typeof colors.dark;
  w?: string;
  onPress?: () => void;
};

export const ButtonCustom: React.FC<propsTypes> = ({
  text,
  variant,
  w = "50%",
  onPress,
}): JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <Button
      w={w}
      rounded={50}
      bg={colors[colorScheme].secondary}
      _pressed={{ bg: colors[colorScheme].secondary }}
      onPress={() => onPress && onPress()}
    >
      {text}
    </Button>
  );
};
