import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToLogin() {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Recriando o conceito de bar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#272C33",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#F2A951",
    fontSize: 25,
  },
});

export default Home;
