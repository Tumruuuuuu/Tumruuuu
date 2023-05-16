import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Saved() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <FontAwesome5 style={styles.icon1} name="share-square" />
        <Feather style={styles.icon2} name="more-horizontal" />
      </View>
      <ScrollView>
        <View style={styles.view}>
          <Image
            style={styles.profile}
            source={require("../../src/images/10.jpg")}
          />
          <Text style={styles.txt1}>Tumruuruu</Text>
          <View style={styles.vw1}>
            <Text style={styles.txt3}>0 followers</Text>
            <Text>∙</Text>
            <Text style={styles.txt2}>0 following</Text>
          </View>
          <View style={styles.vw2}>
            <Text style={styles.txt4}>Created</Text>
            <View style={styles.v2}>
              <Text style={styles.txt5}>Saved</Text>
            </View>
          </View>
        </View>
        <View style={styles.vw3}>
          <View style={styles.search}>
            <FontAwesome name="search" style={styles.icon} />
            <TextInput style={styles.txt}>Search Pinterest</TextInput>
            <FontAwesome name="camera" style={styles.icn} />
          </View>
          <MaterialIcons style={styles.iicon} name="add" />
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
  v1: {
    flexDirection: "row",
    marginTop: 15,
  },
  icon1: {
    fontSize: 25,
    marginLeft: 280,
  },
  icon2: {
    fontSize: 25,
    marginLeft: 26,
  },
  view: {
    alignItems: "center",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  vw1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  vw2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  vw3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  search: {
    backgroundColor: "#f0f0f0",
    width: 300,
    height: 40,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  icon: {
    color: "grey",
    fontSize: 18,
    marginLeft: 10,
  },
  icn: {
    color: "grey",
    fontSize: 18,
    marginLeft: 110,
  },
  txt: {
    color: "grey",
    fontSize: 15,
    marginLeft: 10,
  },
  txt1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  txt2: {
    fontWeight: "700",
    fontSize: 15,
  },
  txt3: {
    fontSize: 15,
  },
  txt4: {
    fontSize: 17,
    fontWeight: "500",
  },
  txt5: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  v2: {
    backgroundColor: "black",
    width: 70,
    height: 40,
    borderRadius: 30,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iicon: {
    fontSize: 30,
    marginLeft: 10,
  },
});
