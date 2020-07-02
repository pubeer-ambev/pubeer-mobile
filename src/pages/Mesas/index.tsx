import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Mesas = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mesas</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    backgroundColor: "#F2A951",
    width: "100%",
    height: 120,
    flexDirection: "column",
  },
  title: {
    alignSelf: "center",
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 50,
  },
});

export default Mesas;
