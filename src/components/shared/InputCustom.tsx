import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps } from "react-native";
import { Input as _Input, Icon, Pressable, Text, Box } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { colors } from "#config/theme";
import { useColorScheme } from "#hooks/useColorScheme";

type propsTypes = TextInputProps & {
  name: string;
  type?: "password" | "text";
  variant?: "underlined" | "outlined" | "filled" | "unstyled" | "rounded";
  error?: string;
};

export const Input: React.FC<propsTypes> = (props) => {
  const {
    name,
    value,
    type = "text",
    variant,
    placeholder,
    error,
    onChange,
    ...inputProps
  } = props;
  const colorScheme = useColorScheme();
  const [show, setShow] = React.useState(false);

  return (
    <Box w="full">
      <_Input
        type={type}
        variant={variant ? variant : "outlined"}
        w={{ base: "100%" }}
        pl="3"
        borderBottomColor={colors[colorScheme].grey[200]}
        color={error ? colors[colorScheme].error : colors[colorScheme].text}
        InputLeftElement={
          type === "password" ? (
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                size={5}
                color={colors[colorScheme].grey[100]}
              />
            </Pressable>
          ) : (
            <Icon
              as={<MaterialIcons name={name} />}
              size={5}
              color={colors[colorScheme].grey[100]}
            />
          )
        }
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
        // value={value}
        {...inputProps}
      />
      {error && (
        <Box mt={1}>
          <Text color={colors[colorScheme].error} textDecoration="underline">
            {error}
          </Text>
        </Box>
      )}
    </Box>
  );
};
