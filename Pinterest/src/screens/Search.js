import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vw}>
        <View style={styles.search}>
          <FontAwesome name="search" style={styles.icon} />
          <TextInput style={styles.txt}>Search Pinterest</TextInput>
          <FontAwesome name="camera" style={styles.icn} />
        </View>
      </View>
      <ScrollView>
        <Text style={styles.text}>Ideas for you</Text>
        <View style={styles.view1}>
          <Image
            style={styles.img}
            source={require("../../src/images/q.jpg")}
          />
          <Image
            style={styles.img}
            source={require("../../src/images/w.jpg")}
          />
        </View>
        <Text style={styles.text1}>Popular on Pinterest</Text>
        <View style={styles.view1}>
          <Image
            style={styles.img}
            source={require("../../src/images/e.jpg")}
          />
          <Image
            style={styles.img}
            source={require("../../src/images/r.jpg")}
          />
        </View>
        <View style={styles.view1}>
          <Image
            style={styles.img}
            source={require("../../src/images/t.jpg")}
          />
          <Image
            style={styles.img}
            source={require("../../src/images/y.jpg")}
          />
        </View>
        <View style={styles.view1}>
          <Image
            style={styles.img}
            source={require("../../src/images/u.jpg")}
          />
          <Image
            style={styles.img}
            source={require("../../src/images/i.jpg")}
          />
        </View>
        <View style={styles.view1}>
          <Image
            style={styles.img}
            source={require("../../src/images/o.jpg")}
          />
          <Image
            style={styles.img}
            source={require("../../src/images/p.jpg")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  vw: {
    height: 65,
  },
  search: {
    backgroundColor: "#f0f0f0",
    width: 350,
    height: 45,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 10,
  },
  icon: {
    color: "grey",
    fontSize: 18,
    marginLeft: 10,
  },
  icn: {
    color: "grey",
    fontSize: 18,
    marginLeft: 160,
  },
  txt: {
    color: "grey",
    fontSize: 15,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 140,
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  view1: {
    flexDirection: "row",
  },
  img: {
    width: 175,
    height: 85,
    borderRadius: 20,
    margin: 5,
  },
});
