import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FormEmailSenha from "../../utils/FormEmailSenha";
import { RectButton } from "react-native-gesture-handler";

const Cadastrar = () => {
  function navegarParaEntrar() {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FormEmailSenha />
        <View style={[styles.containerButton]}>
          <RectButton style={[styles.cadastrar]} onPress={navegarParaEntrar}>
            <Text style={styles.cadastrarText}>Cadastrar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  main: {
    flex: 1,
  },
  containerButton: {
    alignItems: "center",
  },
  cadastrarText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: 10,
  },
  cadastrar: {
    backgroundColor: "#F2A951",
    maxWidth: 170,
    width: 170,
    height: 45,
    borderRadius: 15,
    marginTop: 50,
  },
});

export default Cadastrar;
