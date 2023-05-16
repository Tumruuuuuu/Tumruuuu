import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.vw}>
          <Text style={styles.txt}>For you</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.view0}>
          <View style={styles.view2}>
            <Image
              style={styles.img1}
              source={require("../../src/images/1.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
            <Image
              style={styles.img2}
              source={require("../../src/images/3.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />

            <Image
              style={styles.img1}
              source={require("../../src/images/5.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />

            <Image
              style={styles.img2}
              source={require("../../src/images/7.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
            <Image
              style={styles.img1}
              source={require("../../src/images/9.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
          </View>
          <View style={styles.view2}>
            <Image
              style={styles.img2}
              source={require("../../src/images/2.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
            <Image
              style={styles.img2}
              source={require("../../src/images/4.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
            <Image
              style={styles.img1}
              source={require("../../src/images/6.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
            <Image
              style={styles.img2}
              source={require("../../src/images/8.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
            <Image
              style={styles.img1}
              source={require("../../src/images/10.jpg")}
            />
            <Entypo name="dots-three-horizontal" style={styles.icon} />
          </View>
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
  view1: {
    backgroundColor: "white",
    height: 55,
  },
  vw: {
    backgroundColor: "black",
    width: 80,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 145,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  view0: {
    flexDirection: "row",
  },
  view2: {
    marginLeft: 12,
  },
  img1: {
    width: 170,
    height: 350,
    borderRadius: 20,
  },
  img2: {
    width: 170,
    height: 400,
    borderRadius: 20,
  },
  icon: {
    fontSize: 13,
    marginLeft: 150,
    marginTop: 10,
    marginBottom: 10,
  },
});
