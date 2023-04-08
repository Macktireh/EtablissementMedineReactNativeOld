import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "#navigations/StackNavigator";

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
