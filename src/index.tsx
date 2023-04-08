import { NativeBaseProvider, StatusBar } from "native-base";

import { Navigator } from "#navigations/Navigator";
import { extendThemeFonts } from "#config/theme";

export const MainApp: React.FC = () => {
  return (
    <NativeBaseProvider theme={extendThemeFonts}>
      <Navigator />
      <StatusBar />
    </NativeBaseProvider>
  );
};
