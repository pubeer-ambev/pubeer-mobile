import React, { useState } from "react";
import { View, StyleSheet, Text, CheckBox } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import FormEmailSenha from "../../utils/FormEmailSenha";
import { useNavigation } from "@react-navigation/native";

const Entrar = () => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  function navegarParaEntrar() {
    navigation.navigate("MenuUsuario");
  }
  return (
    <View style={styles.container}>
      <FormEmailSenha />
      <Text style={[styles.titleInput]}>Esqueceu sua senha?</Text>
      <Text style={[styles.manterConectado]}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        Manter conectado
      </Text>

      <View style={[styles.containerButton]}>
        <RectButton style={[styles.entrar]} onPress={navegarParaEntrar}>
          <Text style={styles.entrarText}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000",
  },
  containerButton: {
    alignItems: "center",
  },
  titleInput: {
    color: "#F2A951",
    fontSize: 16,
    fontFamily: "Roboto",
    paddingLeft: 5,
    textDecorationLine: "underline",
    textAlign: "right",
    paddingTop: 15,
  },
  manterConectado: {
    color: "#F2A951",
    fontSize: 16,
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 10,
    height: 60,
    maxHeight: 60,
  },
  entrarText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: 10,
  },
  entrar: {
    backgroundColor: "#F2A951",
    width: 170,
    height: 45,
    borderRadius: 15,
  },
});

export default Entrar;
