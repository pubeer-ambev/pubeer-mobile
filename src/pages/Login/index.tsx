import React from "react";
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
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
      <View style={styles.main}>
      <Image style={styles.logo} source={require("../../assets/logo-login.png")} />
        <RectButton style={[styles.entrar]}>
             <Text style={styles.facebook}>
             <Image source={require("../../assets/face-icon.svg")} /> 
             Entrar com Facebook
            </Text>
        </RectButton>
          <RectButton  style={[styles.entrar]}>
             <Text style={styles.google}>
             <Image source={require("../../assets/google-icon.svg")} /> 
             Entrar com Google
            </Text>
        </RectButton>
        <RectButton style={[styles.entrar]} onPress={navegarParaEntrar}>
             <Text style={styles.email}>
             <Image source={require("../../assets/email-icon.svg")} /> 
             Entrar com E-mail
            </Text>
        </RectButton>
        <Text style={styles.conta}>
          Não tem uma conta? 
          <Text style={styles.cadastre} onPress={navegarParaCadastrar}> Cadastre-se</Text>
        </Text>
        <Text style={styles.ajuda}>Precisando de ajuda?</Text>
        <Text style={styles.faleConosco}>Fale conosco</Text>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000'
  },
  main: {
    flex: 1
  },
  logo: {
    marginBottom: 32,
    left: 50
  },
  entrar: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    margin: 18
  },
  facebook: {
    backgroundColor: '#3D5A99',
    padding: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  google:{
    backgroundColor: '#FFFFFF',
    padding: 18,
    color: '#757575',
    textAlign: 'center',
    fontSize: 20,
  },
  email:{
    backgroundColor: '#FFFFFF',
    padding: 18,
    color: '#757575',
    textAlign: 'center',
    fontSize: 20,
  },
  conta: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F2A951',
    textAlign: 'center',
    paddingTop: 46,
  },
  cadastre:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F2A951',
    textAlign: 'center',
    paddingTop: 46,
    textDecorationLine: 'underline'
  },
  ajuda: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F2A951',
    textAlign: 'center',
    paddingTop: 40,
  },
  faleConosco: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#F2A951',
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});

export default Login;
