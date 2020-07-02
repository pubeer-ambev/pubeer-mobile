import React from "react";
import { View, StyleSheet, Text, Platform, SafeAreaView, Image } from "react-native";
import FormEmailSenha from "../../utils/FormEmailSenha";
import { RectButton } from "react-native-gesture-handler";

const Cadastrar = () => {
  function navegarParaEntrar() {
    return null;
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../../assets/logo-login.png")} />
        </View>
        <FormEmailSenha />
        <View style={[styles.containerButton]}>
          <RectButton style={[styles.cadastrar]} onPress={navegarParaEntrar}>
            <Text style={styles.cadastrarText}>Cadastrar</Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    padding: 14,
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#F2A951',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#000000",
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
