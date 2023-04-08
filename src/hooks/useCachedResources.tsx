import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
          "Roboto-Light": require("../../assets/fonts/Roboto/Roboto-Light.ttf"),
          "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
          "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
          "Roboto-Black": require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
