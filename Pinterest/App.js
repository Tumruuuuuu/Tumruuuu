import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Create from "./src/screens/Create";
import Notif from "./src/screens/Notifications";
import Saved from "./src/screens/Saved";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="Create" component={Create} />
      <HomeStack.Screen name="Notif" component={Notif} />
      <HomeStack.Screen name="Saved" component={Saved} />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Мэдээ") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Тоглолт") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Бусад") {
              iconName = focused ? "add" : "add-outline";
            } else if (route.name === "Фантази") {
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
            } else if (route.name === "Хэрэглэгч") {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarStyle: {
            height: 80,
            paddingHorizontal: 20,
            backgroundColor: "white",
            borderTopWidth: 0,
            marginBottom: 10,
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "darkgrey",
        })}
      >
        <Tab.Screen
          name="Мэдээ"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Тоглолт"
          component={Search}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Бусад"
          component={Create}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Фантази"
          component={Notif}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Хэрэглэгч"
          component={Saved}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
