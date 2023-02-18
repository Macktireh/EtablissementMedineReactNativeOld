import { NativeBaseProvider } from "native-base";

import { Navigator } from "#navigations/Navigator";

export const MainApp: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
};
