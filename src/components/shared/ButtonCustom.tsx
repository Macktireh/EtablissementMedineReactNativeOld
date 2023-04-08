import React from "react";

import { Input, Icon, Pressable, Button } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { colors } from "#config/theme";
import { useColorScheme } from "#hooks/useColorScheme";

type propsTypes = {
  text: string;
  w?: string;
  size?: number;
  onPress?: () => void;
};

export const ButtonCustom: React.FC<propsTypes> = ({
  text,
  w = "70%",
  size,
  onPress,
}): JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <Button
      w={w}
      rounded={50}
      bg={colors[colorScheme].primary}
      _pressed={{ bg: colors[colorScheme].primary }}
      onPress={() => onPress && onPress()}
      pt={4}
      pb={4}
      size={size}
    >
      {text}
    </Button>
  );
};
