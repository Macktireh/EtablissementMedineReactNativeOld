import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabNavigator } from "#navigations/BottomTabNavigator";
import { RootStackParamList } from "#models/navigation";
import { NotFoundScreen } from "#screens/errors/NotFoundScreen";
import { LoginScreen } from "#screens/public/LoginScreen";
import { SignupScreen } from "#screens/public/SignupScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  return (
    <Stack.Navigator>
      {isLoadingComplete ? (
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Group screenOptions={{ animation: "slide_from_right" }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      )}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};
