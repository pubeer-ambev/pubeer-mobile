import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  function navegarParaEntrar() {
    navigation.navigate("Entrar");
  }

  function navegarParaCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo-login.png")} />
        <View>
          <Text style={styles.slogan}>Recriando o seu conceito de bar</Text>
        </View>
      </View>
      <RectButton style={[styles.entrar]}>
        <Text style={styles.facebook}>
          <Image
            style={{ marginRight: 50 }}
            source={require("../../assets/face.png")}
          />
          Entrar com Facebook
        </Text>
      </RectButton>
      <RectButton style={[styles.entrar]}>
        <Text style={styles.google}>
          <Image source={require("../../assets/google-icon.png")} />
          Entrar com Google
        </Text>
      </RectButton>
      <RectButton style={[styles.entrar]}>
        <Text style={styles.email}>
          <Image source={require("../../assets/email-icon.png")} />
          Entrar com E-mail
        </Text>
      </RectButton>
      <Text style={styles.conta}>
        Não tem uma conta? <Text style={styles.cadastre}> Cadastre-se</Text>
      </Text>
      <Text style={styles.ajuda}>Precisando de ajuda?</Text>
      <Text style={styles.faleConosco}>Fale conosco</Text>
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
  logo: {
    padding: 14,
  },
  slogan: {
    fontSize: 20,
    color: "#F2A951",
    textAlign: "center",
  },
  entrar: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    margin: 5,
  },
  facebook: {
    backgroundColor: "#3D5A99",
    height: 50,
    maxHeight: 50,
    color: "#FFFFFF",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
  google: {
    backgroundColor: "#FFFFFF",
    height: 50,
    maxHeight: 50,
    padding: 10,
    color: "#757575",
    textAlign: "center",
    fontSize: 20,
  },
  email: {
    backgroundColor: "#FFFFFF",
    height: 50,
    maxHeight: 50,
    color: "#757575",
    textAlign: "center",
    fontSize: 20,
  },
  conta: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#F2A951",
    textAlign: "center",
    paddingTop: 46,
  },
  cadastre: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#F2A951",
    textAlign: "center",
    paddingTop: 46,
    textDecorationLine: "underline",
  },
  ajuda: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#F2A951",
    textAlign: "center",
    paddingTop: 40,
  },
  faleConosco: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "#F2A951",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default Login;
