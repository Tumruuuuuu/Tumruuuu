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
import Next from "./src/screens/Next";

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
const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Search"
    >
      <HomeStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Next" component={Next} />
    </SearchStack.Navigator>
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
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Create") {
              iconName = focused ? "add" : "add-outline";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
            } else if (route.name === "Saved") {
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
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notif}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
