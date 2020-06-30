import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  main: {
    flex: 1,
  },
});

export default Login;
