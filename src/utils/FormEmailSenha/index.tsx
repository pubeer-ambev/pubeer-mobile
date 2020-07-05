import React from "react";
import { View, StyleSheet, Image, TextInput, Text } from "react-native";

const FormEmailSenha = () => {
  return (
    <>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo-login.png")} />
      </View>
      <Text style={styles.titleInput}>E-mail:</Text>
      <TextInput style={styles.input} />
      <Text style={[styles.titleInput, styles.titleInputSenha]}>Senha:</Text>
      <TextInput secureTextEntry={true} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    padding: 24,
  },
  titleInput: {
    color: "#F2A951",
    fontSize: 16,
    fontFamily: "Roboto",
    paddingLeft: 10,
  },
  titleInputSenha: {
    marginTop: 20,
  },
  input: {
    height: 55,
    maxHeight: 55,
    backgroundColor: "#E7D3BC",
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10,
  },
});

export default FormEmailSenha;
