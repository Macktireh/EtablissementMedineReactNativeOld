import { extendTheme } from "native-base";

const white = "#fafafa";
const black = "#212121";

const genericColor = {
  primary: "#F52C00",
  secondary: "#3f51b5",
  error: "#f44336",
  info: "#2196f3",
  success: "#4caf50",
  warning: "#ff9800",
  white: {
    100: "#FFFFFF",
    200: "#F1F1F1",
    300: "#F2F2F2",
    400: "#F3F3F3",
    500: "#F4F4F4",
    600: "#F5F5F5",
    700: "#F6F6F6",
  },
  black: {
    100: "#000000",
    200: "#171312",
    300: "#1f1816",
    400: "#424242",
    500: "#616161",
    600: "#9e9e9e",
  },
  grey: {
    100: "#EEEEEE",
    200: "#DDDDDD",
    300: "#CCCCCC",
    400: "#9e9e9e",
    500: "#616161",
    600: "#424242",
  },
};

export const colors = {
  light: {
    ...genericColor,
    background: white,
    text: black,
    bottomTabBar: "#f5efed",
  },
  dark: {
    ...genericColor,
    background: "#171312",
    text: white,
    bottomTabBar: "#1f1816",
  },
};

export const extendThemeFonts = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
      // Add more variants
      //   700: {
      //     normal: 'Roboto-Bold',
      //   },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});
