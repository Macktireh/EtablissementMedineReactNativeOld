import React from "react";

import { Input, Icon, Pressable } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import colors from "#constant/colors";
import { useColorScheme } from "#hooks/useColorScheme";

type propsTypes = {
  name: string;
  type?: "password" | "text";
  variant?: "underlined" | "outlined" | "filled" | "unstyled" | "rounded";
  placeholder: string;
  // color: typeof colors.dark;
  // size: number;
};

export const InputCustom: React.FC<propsTypes> = ({
  name,
  type = "text",
  variant,
  placeholder,
}): JSX.Element => {
  const colorScheme = useColorScheme();
  const [show, setShow] = React.useState(false);

  return (
    <Input
      type={!show && name === "password" ? "password" : "text"}
      variant={variant ? variant : "outlined"}
      w={{
        base: "75%",
        md: "25%",
      }}
      pl="3"
      borderBottomColor={colors[colorScheme].text}
      color={colors[colorScheme].grey}
      InputLeftElement={
        name === "password" ? (
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              color={colors[colorScheme].grey}
            />
          </Pressable>
        ) : (
          <Icon
            as={<MaterialIcons name={name} />}
            size={5}
            color={colors[colorScheme].grey}
          />
        )
      }
      placeholder={placeholder}
    />
  );
};
