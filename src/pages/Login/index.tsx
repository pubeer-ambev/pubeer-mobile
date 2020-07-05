import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { droidSafeArea } from "../../styles";

const Login = () => {
  const navigation = useNavigation();

  function navegarParaEntrar() {
    navigation.navigate("Entrar");
  }

  function navegarParaCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../../assets/logo-login.png")} />
          <View>
            <Text style={styles.slogan}>Recriando o seu conceito de bar</Text>
          </View>
        </View>
        
        <RectButton style={[styles.entrar]}>
          <View
            style={[
              styles.containerButton,
              {
                backgroundColor: "#3D5A99",
              },
            ]}
          >
            <Image source={require("../../assets/face.png")} />
            <Text style={styles.facebook}>Entrar com Facebook</Text>
          </View>
        </RectButton>

        <RectButton style={[styles.entrar]}>
          <View
            style={[
              styles.containerButton,
              {
                backgroundColor: "#FFFFFF",
              },
            ]}
          >
            <Image source={require("../../assets/google-icon.png")} />
            <Text style={styles.textWhite}>Entrar com Google</Text>
          </View>
        </RectButton>

        <RectButton style={[styles.entrar]} onPress={navegarParaEntrar}>
          <View
            style={[
              styles.containerButton,
              {
                backgroundColor: "#FFFFFF",
              },
            ]}
          >
            <Image source={require("../../assets/email-icon.png")} />
            <Text style={styles.textWhite}>Entrar com E-mail</Text>
          </View>
        </RectButton>

        <Text style={styles.conta}>
          Não tem uma conta?{" "}
          <Text style={styles.cadastre} onPress={navegarParaCadastrar}>
            {" "}
            Cadastre-se
          </Text>
        </Text>
        <Text style={styles.ajuda}>Precisando de ajuda?</Text>
        <Text style={styles.faleConosco}>Fale conosco</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea,
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
    margin: 5,
  },
  containerButton: {
    borderRadius: 4,
    borderColor: "#e1e5e8",
    height: 50,
    maxHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  facebook: {
    color: "#FFFFFF",
    padding: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textWhite: {
    padding: 20,
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
