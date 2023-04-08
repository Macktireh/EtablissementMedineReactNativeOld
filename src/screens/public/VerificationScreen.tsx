import React, { useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { Image, Pressable, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

import {
  CodeField,
  Cursor,
  RenderCellOptions,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { WrapperScreen } from "#components/shared/WrapperScreen";
import { useColorScheme } from "#hooks/useColorScheme";
import { colors } from "#config/theme";

export const CELL_SIZE = 45;
export const CELL_BORDER_RADIUS = 8;

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;

type animateCellProps = {
  hasValue: boolean;
  index: number;
  isFocused: boolean;
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }: animateCellProps) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      // duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const AnimatedExample = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const source = {
    uri:
      colorScheme === "dark"
        ? "https://raw.githubusercontent.com/Macktireh/Icons/main/Icons/verifIcon-removebg-preview.png"
        : "https://raw.githubusercontent.com/Macktireh/Icons/main/Icons/verifIcon.png",
  };
  const ACTIVE_CELL_BG_COLOR = colors[colorScheme].white;
  const DEFAULT_CELL_BG_COLOR = colors[colorScheme].grey[100];
  const NOT_EMPTY_CELL_BG_COLOR = colors[colorScheme].secondary;

  const onSubmit = () => navigation.goBack();

  // fonction reenvoyer le code par sms ou email

  const renderCell: React.FC<RenderCellOptions> = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[
          styles.cell,
          {
            color: NOT_EMPTY_CELL_BG_COLOR,
            backgroundColor: ACTIVE_CELL_BG_COLOR,
            shadowColor: colors[colorScheme].black,
          },
          animatedCellStyle,
        ]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <WrapperScreen>
      <Text
        color={colors[colorScheme].text}
        pt="50"
        fontSize="28"
        fontWeight="700"
        textAlign="center"
        pb="50"
      >
        Verification
      </Text>
      <Image source={source} width={217 / 1.8} height={158 / 1.8} ml="auto" mr="auto" alt="icon" />
      <Text pt="30" color={colors[colorScheme].text} textAlign="center" fontSize="15">
        Veuillez saisir le code de vérification{"\n"}que nous envoyons par sms
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />

      <View
        mt="50"
        borderRadius={60}
        h="60"
        bg={colors[colorScheme].primary}
        justifyContent="center"
        minWidth="300"
        mb="30"
      >
        <Pressable onPress={onSubmit}>
          <Text textAlign="center" fontSize="18" fontWeight="500" color={colors[colorScheme].white}>
            Verify
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={onSubmit}>
        <Text
          textAlign="center"
          fontSize="14"
          color={colors[colorScheme].text}
          mb="40"
          textDecorationLine={colors[colorScheme].text}
          textDecoration="underline"
        >
          Renvoyer le code
        </Text>
      </Pressable>
    </WrapperScreen>
  );
};

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,

    // IOS
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },
});

export const VerificationScreen: React.FC = () => <AnimatedExample />;
