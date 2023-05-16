import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView container={styles.container}>
      <View>
        <Text>Foryou</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
