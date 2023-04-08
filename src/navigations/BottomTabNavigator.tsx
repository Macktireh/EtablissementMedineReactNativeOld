import React from "react";

import { BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "#screens/protected/HomeScreen";
import { SearchScreen } from "#screens/protected/SearchScreen";
import { CartScreen } from "#screens/protected/CartScreen";
import { ContactScreen } from "#screens/protected/ContactScreen";
import { ProfileScreen } from "#screens/protected/ProfileScreen";
import { protectedScreenName } from "#screens/protected";
import { RootTabParamList } from "#types/navigationTyping";
import { useColorScheme } from "#hooks/useColorScheme";
import { colors } from "#config/theme";
import { Header } from "#components/shared/Header";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName={protectedScreenName.Home}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors[colorScheme].primary,
        tabBarInactiveTintColor: colors[colorScheme].grey[500],
        // headerTransparent: true,
        headerTitle: "ddddd",
        header: (props: BottomTabHeaderProps) => <Header nameScreen={props.route.name}></Header>,
        headerStyle: {
          backgroundColor: colors[colorScheme].background,
          height: 60,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: colors[colorScheme].text,
        },

        tabBarLabelStyle: {
          fontSize: 11,
        },
        tabBarStyle: [
          {
            display: "flex",
            paddingBottom: 2,
            paddingTop: 2,
            height: 46,
            backgroundColor: colors[colorScheme].bottomTabBar,
            borderTopColor: colors[colorScheme].grey[300],
          },
          null,
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === protectedScreenName.Home) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === protectedScreenName.Search) {
            iconName = focused ? "search-sharp" : "search-outline";
          } else if (rn === protectedScreenName.Cart) {
            iconName = focused ? "cart" : "cart-outline";
          } else if (rn === protectedScreenName.Profile) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === protectedScreenName.Contact) {
            iconName = focused ? "settings-sharp" : "settings-outline";
          }

          return <Ionicons name={iconName as string} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={protectedScreenName.Home} component={HomeScreen} />
      <Tab.Screen name={protectedScreenName.Search} component={SearchScreen} />
      <Tab.Screen name={protectedScreenName.Cart} component={CartScreen} />
      <Tab.Screen name={protectedScreenName.Profile} component={ProfileScreen} />
      <Tab.Screen name={protectedScreenName.Contact} component={ContactScreen} />
    </Tab.Navigator>
  );
};
