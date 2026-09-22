import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>My AI Android Builder</Text>
        <Text style={styles.subtitle}>
          AI-powered Android app development assistant
        </Text>
        <Text style={styles.status}>Ready to build 🚀</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101114",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "90%",
    padding: 25,
    borderRadius: 20,
    backgroundColor: "#1b1d22",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#cccccc",
    marginBottom: 20,
  },
  status: {
    fontSize: 17,
    color: "#00d084",
  },
});
