import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "#screens/protected/HomeScreen";
import { CartScreen } from "#screens/protected/CartScreen";
import { ContactScreen } from "#screens/protected/ContactScreen";
import { ProfileScreen } from "#screens/protected/ProfileScreen";
import { RootTabParamList } from "#models/navigation";
import { useColorScheme } from "#hooks/useColorScheme";
import colors from "#constant/colors";

// screen names
const HomeName = "Home";
const CartName = "Cart";
const ProfileName = "Profile";
const ContactName = "Contact";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName={HomeName}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors[colorScheme].primary,
        tabBarInactiveTintColor: colors[colorScheme].text,
        // headerTransparent: true,
        // headerTitle: "",
        // header: () => <></>,
        headerStyle: {
          backgroundColor: colors[colorScheme].background,
          height: 100,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: colors[colorScheme].text,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarStyle: [
          {
            display: "flex",
            paddingBottom: 4,
            paddingTop: 4,
            height: 50,
            backgroundColor: colors[colorScheme].background,
          },
          null,
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === HomeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === CartName) {
            iconName = focused ? "cart" : "cart-outline";
          } else if (rn === ProfileName) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === ContactName) {
            iconName = focused ? "help-circle" : "help-circle-outline";
          }

          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name={HomeName} component={HomeScreen} />
      <Tab.Screen name={CartName} component={CartScreen} />
      <Tab.Screen name={ProfileName} component={ProfileScreen} />
      <Tab.Screen name={ContactName} component={ContactScreen} />
    </Tab.Navigator>
  );
};
