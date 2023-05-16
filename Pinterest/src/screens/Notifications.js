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
  TextInput,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Feather, FontAwesome } from "@expo/vector-icons";

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
        <Feather style={styles.iicon} name="more-horizontal" />
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
    <View style={styles.search}>
      <FontAwesome name="search" style={styles.icon1} />
      <TextInput style={styles.txtt}>Search by name or email</TextInput>
      <FontAwesome name="camera" style={styles.iconn} />
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
    marginLeft: 20,
  },
  iicon: {
    color: "black",
    fontSize: 18,
    marginLeft: 185,
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
    marginLeft: 70,
    marginTop: 70,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  search: {
    backgroundColor: "#f0f0f0",
    width: 350,
    height: 45,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 40,
  },
  icon1: {
    color: "grey",
    fontSize: 18,
    marginLeft: 10,
  },
  iconn: {
    color: "grey",
    fontSize: 18,
    marginLeft: 105,
  },
  txtt: {
    color: "grey",
    fontSize: 15,
    marginLeft: 10,
  },
});

export default App;
