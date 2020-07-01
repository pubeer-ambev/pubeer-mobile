import React from "react";
import { View, StyleSheet, Image, TextInput, Text } from "react-native";

const FormEmailSenha = () => {

    return(
        <>
            <Image style={styles.logo} source={require("../../assets/logo-login.png")} />
            <Text style={styles.titleInput}>E-mail:</Text>
            <TextInput 
                style={styles.input}
            />
            <Text style={[styles.titleInput, styles.titleInputSenha]}>Senha:</Text>
            <TextInput 
                style={styles.input}
            />
        </>
    )
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 32,
    left: 50
  },
  titleInput: {
    color: '#F2A951',
    fontSize: 16,
    fontFamily: 'Roboto',
    paddingLeft: 5,
  },
  titleInputSenha: {
    marginTop: 40,
  },
  input: {
    height: 60,
    backgroundColor: "#E7D3BC",
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10
  },
});


export default FormEmailSenha;
