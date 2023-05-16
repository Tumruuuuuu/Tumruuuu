import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Feather } from "@expo/vector-icons";

      <Text>Notifications</Text>
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]}>
    <ScrollView>
      <View style={styles.view1}>
        <Text style={styles.txt}>Try searching more ideas to get inspired</Text>
        <Feather style={styles.icon} name="more-horizontal" />
      </View>
      <Image style={styles.img} source={require("../../src/images/p1.jpg")} />
      <View style={styles.view1}>
        <Text style={styles.txt}>Treding searches</Text>
        <Feather style={styles.icon} name="more-horizontal" />
      </View>
      <Image style={styles.img} source={require("../../src/images/p2.jpg")} />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]}>
    <View style={styles.view2}>
      <Text style={styles.text}>Share ideas with</Text>
      <Text style={styles.text}> your friends</Text>
    </View>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route, focused, color }) => (
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
        {route.title}
      </Text>
    )}
    style={styles.tabBar}
    labelStyle={styles.tabLabel}
    scrollEnabled={true}
  />
);

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Updates" },
    { key: "second", title: "Messages" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v0}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "white",
    width: 250,
    marginLeft: 90,
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  tabLabelFocused: {
    color: "black",
  },
  v0: { height: "100%" },
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "black",
    fontSize: 18,
  },
  txt: {
    fontSize: 16,
    margin: 15,
  },
  img: {
    width: 350,
    borderRadius: 20,
    marginLeft: 13,
    height: 200,
  },
  view2: {
    width: 250,
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
});

export default App;
